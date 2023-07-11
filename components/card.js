import { openModal } from "../utils/utils.js";
import {
  previewImage,
  previewImageModal,
  previewTitle,
} from "../pages/index.js";

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
    this._likeButton.addEventListener("click", this._handleLikeIcon);
    this._deleteButton.addEventListener("click", this._handleDeleteCard);
    this._cardImage.addEventListener("click", this._handlePreviewImage);
  }

  _handleLikeIcon() {
    this._likeButton.classList.toggle("card__like-button_active");
  }

  _handleDeleteCard() {
    this._cardElement.remove();
  }

  _handlePreviewImage() {
    previewImage.src = this._link;
    previewImage.alt = this._name;
    previewTitle.textContent = this._name;
    openModal(previewImageModal);
  }

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
