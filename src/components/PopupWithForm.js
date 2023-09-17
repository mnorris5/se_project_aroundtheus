import Popup from "./Popup.js";
export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super({ popupSelector });
    this._popupForm = this._popupElement.querySelector(".modal__form");
    this._inputList = this._popupElement.querySelectorAll(".modal__input");
    this._submitButton = this._popupForm.querySelector(".modal__button");
    this._submitButtonText = this._submitButton.textContent;
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
    this._popupForm.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
      // this.close();
    });
    super.setEventListener();
  }
  setButtonText(submit, buttonText = "Saving...") {
    if (submit) {
      this._submitButton.textContent = buttonText;
    } else {
      this._submitButton.textContent = this._submitButtonText;
    }
  }
  close() {
    super.close();
    this._popupForm.reset();
  }
}
