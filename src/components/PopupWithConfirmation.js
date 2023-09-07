import Popup from "./Popup.js";
export default class PopupWithConfirmation extends Popup {
  constructor({ popupSelector }) {
    super(popupSelector);
    this._popupForm = this._popupElement.querySelector(".modal__form");
    this._submitButton = this._submitButton.querySelector(".modal__button");
    this._submitButtonText = this._submitButton.textContent;
  }
  open() {
    this._popupForm.reset();
    super.open();
  }
  close() {
    this._popupForm.reset();
    super.close();
  }

  setButtonText(submit, buttonText = "Saving...") {
    if (submit) {
      this._submitButton.textContent = buttonText;
    } else {
      this._submitButton.textContent = this._submitButtonText;
    }
  }
  setSubmitCallback() {
    this._handleFormSubmit = callback;
  }
  setEventListeners() {
    this._popupForm.addEventListener("submit", () => {
      this._handleFormSubmit();
    });
    super.setEventListeners();
  }
}
