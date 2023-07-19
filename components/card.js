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
    this.classList.toggle("card__like-button_active");
  }

  _handleDeleteCard = () => {
    this._element.remove();
  };

  _handlePreviewImage = () => {
    previewImage.src = this._link;
    previewImage.alt = this._name;
    previewTitle.textContent = this._name;
    openModal(previewImageModal);
  };

  generateCard() {
    this._element = this._getTemplate();

    this._likeButton = this._element.querySelector(".card__like-button");
    this._deleteButton = this._element.querySelector(".card__delete-button");
    this._cardImage = this._element.querySelector(".card__image");

    this._element.querySelector(".card__image").src = this._link;
    this._element.querySelector(".card__title").textContent = this._name;

    this._setEventListeners();
    console.log(this._element);
    return this._element;
  }
}
export default Card;
