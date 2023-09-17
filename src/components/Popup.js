export default class Popup {
  constructor({ popupSelector }) {
    this._popupElement = document.querySelector(popupSelector);
  }
  open() {
    this._popupElement.classList.add("modal_opened");
    document.addEventListener("keyup", this._closeByEscape);
    // console.log(this);
  }
  close() {
    this._popupElement.classList.remove("modal_opened");
    document.removeEventListener("keyup", this._closeByEscape);
  }
  _closeByEscape = (evt) => {
    // console.log(this);

    if (evt.key === "Escape") {
      this.close();
    }
  };

  setEventListener() {
    this._popupElement.addEventListener("mouseup", (evt) => {
      if (
        evt.target.classList.contains("modal__close") ||
        evt.target.classList.contains("modal_opened")
      ) {
        this.close();
      }
    });
    // document.addEventListener("keyup", (evt) => {
    //   if (evt.key === "Escape") {
    //     this.close();
    //   }
    // });
  }
}
