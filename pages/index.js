import Card from "../components/card.js";
import FormValidator from "../components/FormValidator.js";
import { openModal, closeModal } from "../utils/utils.js";

const config = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__button",
  inactiveButtonClass: "modal__button_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error_visible",
};
const editProfileForm = document.querySelector("#edit-profile-form");
const addCardForm = document.querySelector("#add-card-form");
const addCardFormValidator = new FormValidator(config, addCardForm);
const editProfileFormValidator = new FormValidator(config, editProfileForm);
addCardFormValidator.enableValidation();
editProfileFormValidator.enableValidation();

const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
  },
  {
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg",
  },
  {
    name: "Bald Mountains",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg",
  },
  {
    name: "Vanoise National Park",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg ",
  },
];

const cardSelector = "#card-template";
const renderCard = (cardData, wrapper) => {
  const card = new Card(cardData, cardSelector);
  wrapper.prepend(card.generateCard());
  //   card._setEventListeners();
};

// const cardTemplate = document
//   .querySelector("#card-template")
//   .content.querySelector(".card");

// function renderCard(cardData, wrapper) {
//   const cardElement = getCardElement(cardData);
//   wrapper.prepend(cardElement);
// }

// wrappers
const cardsWrap = document.querySelector(".cards__list");
const editProfileModal = document.querySelector("#edit-modal");
const addCardModal = document.querySelector("#add-card-modal");
const profileFormElement = editProfileModal.querySelector(".modal__form");
const addCardFormElement = addCardModal.querySelector(".modal__form");

export const previewImageModal = document.querySelector("#image-modal");
export const previewImage = previewImageModal.querySelector(
  ".modal__preview-image"
);
export const previewTitle = previewImageModal.querySelector(
  ".modal__preview-title"
);

// buttons and dom nodes
const profileEditButton = document.querySelector(".profile__edit-button");
const profileModalCloseButton = editProfileModal.querySelector(".modal__close");
const addCardModalCloseButton = addCardModal.querySelector(".modal__close");
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const addNewCardButton = document.querySelector(".profile__add-button");
const previewModalCloseButton =
  previewImageModal.querySelector(".modal__close");

const cardAddSubmitButton = addCardModal.querySelector(".modal__button");

// form data
const nameInput = profileFormElement.querySelector(".modal__input_type_name");
const jobInput = profileFormElement.querySelector(
  ".modal__input_type_description"
);
const cardTitleInput = addCardFormElement.querySelector(
  ".modal__input_type_title"
);
const cardUrlInput = addCardFormElement.querySelector(".modal__input_type_url");

// function closeModal(modal) {
//   modal.classList.remove("modal_opened");
//   document.removeEventListener("keyup", closeByEscape);
//   document.removeEventListener("mousedown", closeByClick);
// }

// function openModal(modal) {
//   modal.classList.add("modal_opened");
//   document.addEventListener("keyup", closeByEscape);
//   modal.addEventListener("mousedown", closeByClick);
// }

// function closeByEscape(evt) {
//   if (evt.key === "Escape") {
//     const openedModal = document.querySelector(".modal_opened");

//     closeModal(openedModal);
//   }
// }

// function closeByClick(evt, modal) {
//   if (
//     evt.target === evt.currentTarget ||
//     evt.target.classList.contains("modal__close")
//   ) {
//     closeModal(evt.target);
//   }
// }

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileDescription.textContent = jobInput.value;
  closeModal(editProfileModal);
}
function handleAddCardFormSubmit(evt) {
  evt.preventDefault();
  const name = cardTitleInput.value;
  const link = cardUrlInput.value;
  renderCard({ name, link }, cardsWrap);
  closeModal(addCardModal);

  addCardFormElement.reset();
  addCardFormValidator.resetValidation();
  addCardFormValidator._disableBtn();

  // addCardFormValidator._toggleButtonState();

  // toggleButtonState();
  // [(cardTitleInput, cardUrlInput)], cardAddSubmitButton, config;
}

// function getCardElement(data) {
//   const cardElement = cardTemplate.cloneNode(true);
//   const cardImage = cardElement.querySelector(".card__image");
//   const cardTitle = cardElement.querySelector(".card__title");
//   const likeButton = cardElement.querySelector(".card__like-button");
//   const deleteButton = cardElement.querySelector(".card__delete-button");
//   deleteButton.addEventListener("click", () => {
//     cardElement.remove();
//   });

//   cardImage.addEventListener("click", () => {
//     previewImage.src = data.link;
//     previewImage.alt = data.name;
//     previewTitle.textContent = data.name;
//     openModal(previewImageModal);
//   });

//   likeButton.addEventListener("click", () => {
//     likeButton.classList.toggle("card__like-button_active");
//   });

//   cardImage.src = data.link;
//   cardImage.alt = data.name;
//   cardTitle.textContent = data.name;

//   return cardElement;
// }

// form listeners

previewModalCloseButton.addEventListener("click", () =>
  closeModal(previewImageModal)
);

profileFormElement.addEventListener("submit", handleProfileFormSubmit);
addCardFormElement.addEventListener("submit", handleAddCardFormSubmit);

profileEditButton.addEventListener("click", () => {
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileDescription.textContent;
  openModal(editProfileModal);
});
profileModalCloseButton.addEventListener("click", () =>
  closeModal(editProfileModal)
);
// add new card
addNewCardButton.addEventListener("click", () => openModal(addCardModal));

addCardModalCloseButton.addEventListener("click", () =>
  closeModal(addCardModal)
);

initialCards.forEach((cardData) => renderCard(cardData, cardsWrap));
