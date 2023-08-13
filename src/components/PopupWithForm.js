import Popup from "./Popup.js";
export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super({ popupSelector });
    this._popupForm = this._popupElement.querySelector(".modal__form");
    this._inputList = this._popupElement.querySelectorAll(".modal__input");
    this._handleFormSubmit = handleFormSubmit;
  }
  _getInputValues() {
    const values = {};
    this._inputList.forEach((element) => {
      values[element.name] = element.value;
    });
    return values;
  }

  setEventListeners() {
    this._popupForm.addEventListener("submit", () => {
      this._handleFormSubmit(this._getInputValues());
      this.close();
    });
    super.setEventListener();
  }

  close() {
    super.close();
    this._popupForm.reset();
  }
}

// const nameInput = editProfileForm.querySelector(".modal__input_type_name");
// const jobInput = editProfileForm.querySelector(
//   ".modal__input_type_description"
// );
// const cardTitleInput = addCardForm.querySelector(".modal__input_type_title");
// const cardUrlInput = addCardForm.querySelector(".modal__input_type_url");

// function handleProfileFormSubmit(evt) {
//   evt.preventDefault();
//   profileTitle.textContent = nameInput.value;
//   profileDescription.textContent = jobInput.value;
//   closeModal(editProfileModal);
// }
// function handleAddCardFormSubmit(evt) {
//   evt.preventDefault();
//   const name = cardTitleInput.value;
//   const link = cardUrlInput.value;
//   renderCard({ name, link }, cardsWrap);
//   closeModal(addCardModal);

//   addCardForm.reset();
//   addCardFormValidator.resetValidation();
// }

// editProfileForm.addEventListener("submit", handleProfileFormSubmit);
// addCardForm.addEventListener("submit", handleAddCardFormSubmit);
