import Popup from "./Popup";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._previewImage = this._popupElement.querySelector(
      ".modal__preview-image"
    );
    this._previewTitle = this._popupElement.querySelector(
      ".modal__preview-title"
    );
  }
  open(data) {
    this._previewImage.src = data.link;
    this._previewImage.alt = data.text;
    this._previewTitle.textContent = data.text;
    super.open();
  }

  // close() {
  //   super.close();
  // }
}
