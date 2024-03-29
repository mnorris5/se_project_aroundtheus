import "./index.css";
// class imports
import { initialCards, selectors, config } from "../utils/constants.js";
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
// import { openModal, closeModal } from "../utils/utils.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";

const addCardForm = document.querySelector("#add-card-form");
const editProfileForm = document.querySelector("#edit-profile-form");
const addNewCardButton = document.querySelector(".profile__add-button");
const editProfileButton = document.querySelector(".profile__edit-button");

// create instances of classes

const userInfo = new UserInfo({
  nameSelector: ".profile__title",
  jobSelector: ".profile__description",
});

const addCardFormValidator = new FormValidator(config, addCardForm);
const editProfileFormValidator = new FormValidator(config, editProfileForm);
addCardFormValidator.enableValidation();
editProfileFormValidator.enableValidation();

const cardPreviewPopup = new PopupWithImage({
  popupSelector: selectors.previewPopup,
});

const cardSection = new Section(
  {
    renderer: (data) => {
      const cardEl = createCard(data);
      cardSection.addItem(cardEl);
    },
  },
  selectors.cardSection
);

const newCardPopup = new PopupWithForm(
  "#add-card-modal",
  handleAddCardFormSubmit
);
newCardPopup.setEventListeners();

addNewCardButton.addEventListener("click", () => {
  addCardFormValidator.resetValidation();
  newCardPopup.open();
});

const editProfilePopup = new PopupWithForm(
  "#edit-modal",
  handleProfileFormSubmit
);
editProfilePopup.setEventListeners();

const ownerNameInput = document.querySelector("#owner-name");
const ownerDescriptionInput = document.querySelector("#owner-description");

editProfileButton.addEventListener("click", () => {
  const user = userInfo.getUserInfo();
  ownerNameInput.value = user.name;
  ownerDescriptionInput.value = user.job;
  editProfileFormValidator.resetValidation();
  editProfilePopup.open();
});

function createCard(data) {
  const cardEl = new Card(
    {
      data,
      handleImageClick: (imgData) => {
        cardPreviewPopup.open(imgData);
      },
    },
    selectors.cardTemplate
  );
  return cardEl.generateCard();
}

function handleAddCardFormSubmit(values) {
  const name = values.title;
  const link = values.URL;
  // generateCard({ name, link }, cardsWrap);
  const cardEl = createCard({ name, link });
  cardSection.addItem(cardEl);

  newCardPopup.close();
}

function handleProfileFormSubmit(values) {
  userInfo.setUserInfo(values);
  editProfilePopup.close();
}

// initialize instances
cardSection.renderItems(initialCards);
cardPreviewPopup.setEventListener();

// all the rest

addNewCardButton.addEventListener("click", () => {
  addCardFormValidator.resetValidation();
  newCardPopup.open();
});
editProfileButton.addEventListener("click", () => {
  editProfileFormValidator.resetValidation();
  editProfilePopup.open();
});
