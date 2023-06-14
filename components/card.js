const imageModalWindow = document.querySelector(".modal__preview-container");
const imageElement = imageModalWindow.querySelector(".modal__preview-image");
const imageCaption = imageModalWindow.querySelector(".modal__preview-title");
const ESC_KEYCODE = 27;

const handleEsc = (evt) => {
  evt.preventDefault();

  const activeModal = document.querySelector(".modal_opened");
  if (evt.which === ESC_KEYCODE) {
    closeModalWindow(activeModal);
  }
};

const openModalWindow = (modalWindow) => {
  modalWindow.classList.add("modal__opened");
  document.addEventListener("keyup", handleEsc);
};

const closeModalWindow = (modalWindow) => {
  modalWindow.classList.remove("modal__opened");
  document.removeEventListener("keyup", handleEsc);
};

class Card {
  constructor(data, cardSelector) {
    this._name = data.name;
    this._link = data.link;

    this._cardSelector = cardSelector;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".card")
      .cloneNode(true);
    return cardElement;
  }

  _setEventListeners() {
    //  haandlers are private
  }

  _handleLikeIcon() {}

  _handleDeleteCard() {}

  _handlePreviewImage() {}

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();

    this._element.querySelector(
      ".card__image"
    ).style.backgroundImage = `url(4{this._link})`;
    this._element.querySelector(".card__title").textContent = this._text;

    return this._element;
  }
}
export default Card;
