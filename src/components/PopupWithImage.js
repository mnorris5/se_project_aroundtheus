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
    this._previewImage.src = data._link;
    this._previewImage.alt = data._name;
    this._previewTitle.textContent = data._name;
    super.open();
  }
}
