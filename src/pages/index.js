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
import Api from "../components/api";
import PopupWithConfirmation from "../components/PopupWithConfirmation";

const addCardForm = document.querySelector("#add-card-form");
const editProfileForm = document.querySelector("#edit-profile-form");
const editAvatarForm = document.querySelector("#edit-avatar-form");

const addNewCardButton = document.querySelector(".profile__add-button");
const editProfileButton = document.querySelector(".profile__edit-button");
const editAvatarButton = document.querySelector(".profile__image-edit-button");
// const cardDeleteButton = document.querySelector(".card__delete-button");

// create instances of classes

const api = new Api({
  baseUrl: "https://around-api.en.tripleten-services.com/v1",
  headers: {
    authorization: "538c4c21-92b1-4aec-a8cb-8245624705df",
    "Content-Type": "application/json",
  },
});
let cardSection;

api.getInitialCards().then((res) => {
  cardSection = new Section(
    {
      items: res,
      renderer: (data) => {
        const cardEl = createCard(data);
        cardSection.addItem(cardEl);
      },
    },
    selectors.cardSection
  );
  cardSection.renderItems();
});

api.getUserInfo().then((res) => {
  userInfo.setAvatar(res.avatar);
  userInfo.setUserInfo(res);
  // userInfo.setUserInfo(res.about);
});

const userInfo = new UserInfo({
  nameSelector: ".profile__title",
  jobSelector: ".profile__description",
  userAvatar: ".profile__image",
});

const addCardFormValidator = new FormValidator(config, addCardForm);
const editProfileFormValidator = new FormValidator(config, editProfileForm);
const editAvatarFormValidator = new FormValidator(config, editAvatarForm);
addCardFormValidator.enableValidation();
editProfileFormValidator.enableValidation();
editAvatarFormValidator.enableValidation();

const cardPreviewPopup = new PopupWithImage({
  popupSelector: selectors.previewPopup,
});

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

const editAvatarPopup = new PopupWithForm(
  "#avatar-modal",
  handleAvatarFormSubmit
);
editAvatarPopup.setEventListeners();

const ownerNameInput = document.querySelector("#owner-name");
const ownerDescriptionInput = document.querySelector("#owner-description");

editProfileButton.addEventListener("click", () => {
  const user = userInfo.getUserInfo();
  ownerNameInput.value = user.name;
  ownerDescriptionInput.value = user.job;
  editProfileFormValidator.resetValidation();
  editProfilePopup.open();
});

const handleDeleteClick = (card) => {
  confirmationPopup.open();
  confirmationPopup.setSubmitCallback(() => {
    confirmationPopup.setButtonText(true, "Saving...");

    api
      .deleteCard(card._cardId)
      .then(() => {
        card.delete();
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        confirmationPopup.close();
      });
  });
};

const handleLikeClick = (card) => {
  if (card._isLiked) {
    api
      .unlikeCard(card._cardId)
      .then(() => {
        card._handleLikeIcon(false);
      })
      .catch((err) => {
        console.error(err);
      });
  } else {
    api
      .likeCard(card._cardId)
      .then(() => {
        card._handleLikeIcon(true);
      })
      .catch((err) => {
        console.error(err);
      });
  }
};

const popupSelector = "#delete-modal";
const confirmationPopup = new PopupWithConfirmation(popupSelector);

// handleDeleteClick();
confirmationPopup.setEventListeners();

function createCard(data) {
  const cardEl = new Card(
    {
      data,
      handleLikeClick,
      handleDeleteClick,
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
  // console.log(values);
  const link = values.URL;
  // generateCard({ name, link }, cardsWrap);
  api.addCards({ title: values.title, url: values.URL }).then((res) => {
    // res is the card data
    const cardEl = createCard(res);
    cardSection.addItem(cardEl);

    newCardPopup.close();
  });
}

function handleProfileFormSubmit(values) {
  api.updateUserInfo(values).then((res) => {
    userInfo.setUserInfo(res);
    editProfilePopup.close();
  });
}
function handleAvatarFormSubmit(values) {
  api.updateAvatar(values).then((res) => {
    userInfo.setAvatar(res.avatar);
    editAvatarFormValidator.resetValidation();
    editAvatarPopup.close();
  });
}
// initialize instances

// cardSection.renderItems(initialCards);
cardPreviewPopup.setEventListener();

// all the rest

// addNewCardButton.addEventListener("click", () => {
//   addCardFormValidator.resetValidation();
//   newCardPopup.open();
// });
// editProfileButton.addEventListener("click", () => {
//   editProfileFormValidator.resetValidation();
//   editProfilePopup.open();
// });

editAvatarButton.addEventListener("click", () => {
  editAvatarFormValidator.resetValidation();
  editAvatarPopup.open();
});
