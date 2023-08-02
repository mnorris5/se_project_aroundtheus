import "./index.css";
// class imports
import { initialCards, selectors } from "../utils/constants.js";
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import { openModal, closeModal } from "../utils/utils.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage";

// create instances of classes
const CardPreviewPopup = new PopupWithImage({
  popupSelector: selectors.previewPopup,
});

const CardSection = new Section(
  {
    renderer: (data) => {
      const cardEl = new Card(
        {
          data,
          handleImageClick: (imgData) => {
            CardPreviewPopup.open(imgData);
          },
        },
        selectors.cardTemplate
      );
      CardSection.addItem(cardEl.generateCard());
    },
  },
  selectors.cardSection
);

// const newCardPopup = new PopupWithForm("#add-card-modal", () => {});
//     newCardPopup.open();

//     newCardPopup.close();
// initialize instances
CardSection.renderItems(initialCards);
CardPreviewPopup.setEventListener();

// all the rest
