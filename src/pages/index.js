import "./index.css";
// class imports
import { initialCards, selectors } from "../utils/constants.js";
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import { openModal, closeModal } from "../utils/utils.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage";
import PopupWithForm from "../components/PopupWithForm";
import config from "../utils/constants.js";

// create instances of classes

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
      const cardEl = new Card(
        {
          data,
          handleImageClick: (imgData) => {
            cardPreviewPopup.open(imgData);
          },
        },
        selectors.cardTemplate
      );
      cardSection.addItem(cardEl.generateCard());
    },
  },
  selectors.cardSection
);

const newCardPopup = new PopupWithForm("#add-card-modal", () => {});
const editProfilePopup = new PopupWithForm("#edit-modal", () => {});

newCardPopup.setEventListeners();
editProfilePopup.setEventListeners();

// newCardPopup.open();
// newCardPopup.close();
// initialize instances
cardSection.renderItems(initialCards);
cardPreviewPopup.setEventListener();

// all the rest

const addNewCardButton = document.querySelector(".profile__add-button");
const editProfileButton = document.querySelector(".profile__edit-button");
addNewCardButton.addEventListener("click", () => newCardPopup.open());
editProfileButton.addEventListener("click", () => editProfilePopup.open());
//repeat 45 for other 2 popups
