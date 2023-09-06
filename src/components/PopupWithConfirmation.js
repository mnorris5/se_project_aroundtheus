import Popup from "./Popup.js";
export default class PopupWithConfirmation {
  constructor({ popupSelector }) {
    super(popupSelector);
    this._popupForm = this._popupElement.querySelector(".modal__form");
  }
  open() {}
  close() {}
  setButtonText() {}
  setEventListeners() {}
}
