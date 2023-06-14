class FormValidator {
  constructor(config, formElement) {
    this._inputSelector = config.inputSelector;
    this._submitButtonSelector = config.submitButtonSelector;
    this._inactiveButtonClass = config.inactiveButtonClass;
    this._inputErrorClass = config.inputErrorClass;
    this._errorClass = config.errorClass;

    this._element = formElement;
  }

  _showInputError(inputElement, errorMessage) {
    const errorElement = this._element.queryselector(
      `#${inputElement.id}-error`
    );

    inputElement.classList.add(this._inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._errorClass);
  }

  _hideInputError(inputElement) {
    const errorElement = this._element.queryselector(
      `#${inputElement.id}-error`
    );

    inputElement.classList.remove(this._inputErrorClass);
    errorElement.textContent = "";
    errorElement.classList.remove(this._errorClass);
  }

  _checkInputValidity() {}

  _hasInvalidInput() {}

  _disableBtn() {}

  _enableBtn() {}

  _toggleButtonstate() {}

  _setEventListeners() {}

  enableValidation() {
    this._element.addEventListener("submit", (evt) => {
      evt.preventDefault();
      // ...implementation of listener
    });
    this._setEventListeners();
  }
}
export default FormValidator;
