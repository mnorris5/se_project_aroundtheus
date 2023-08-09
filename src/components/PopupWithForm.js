import Popup from "./Popup.js";
export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super({ popupSelector });
    this._popupForm = this._popupElement.querySelector(".modal__form");
    this._inputList = this._popupElement.querySelector(".modal__input");
    this._handleFormSubmit = handleFormSubmit;
  }
  _getInputValues() {
    const values = {};
    this._inputList.forEach((element) => {
      values[element.name] = element.value;
    });
    return values;
  }

  setEventListeners() {
    this._popupForm.addEventListener("submit", () => {
      this._handleFormSubmit(this._getInputValues());
      this.close();
    });
    super.setEventListener();
  }

  close() {
    super.close();
    // this._popupForm.reset();
  }
}
