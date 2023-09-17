export default class Card {
  constructor(
    { data, handleImageClick, handleDeleteClick, handleLikeClick },
    cardSelector
  ) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
    this._handleImageClick = handleImageClick;
    this._handleDeleteClick = handleDeleteClick;
    this._handleLikeClick = handleLikeClick;

    this.cardId = data._id;
    this.isLiked = data.isLiked;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".card")
      .cloneNode(true);
    return cardElement;
  }

  _setEventListeners() {
    this._likeButton.addEventListener("click", () => {
      // this._handleLikeIcon;
      this._handleLikeClick(this);
      // this._handleDislikeClick(this);
    });

    this._deleteButton.addEventListener("click", () => {
      this._handleDeleteClick(this);
    });
    this._cardImage.addEventListener("click", () =>
      this._handleImageClick({ link: this._link, text: this._name })
    );
  }

  handleLikeIcon(isLiked) {
    this.isLiked = isLiked;
    this._renderLikes();
    //
    // this._likeButton.classList.toggle("card__like-button_active");
  }
  _renderLikes() {
    // check if thisisliked is true add active class
    // similar to handle like if/else
    if (this.isLiked) {
      this._likeButton.classList.add("card__like-button_active");
    } else {
      this._likeButton.classList.remove("card__like-button_active");
    }
  }
  // make this a public function

  delete = () => {
    this._element.remove();
    this._element = null;
  };

  generateCard() {
    this._element = this._getTemplate();

    this._likeButton = this._element.querySelector(".card__like-button");
    this._deleteButton = this._element.querySelector(".card__delete-button");
    this._cardImage = this._element.querySelector(".card__image");
    this._renderLikes();

    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._element.querySelector(".card__title").textContent = this._name;

    this._setEventListeners();

    return this._element;
  }
}
// export default Card;
