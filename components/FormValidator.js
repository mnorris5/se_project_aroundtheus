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

  _checkInputValidity() {
    if (!inputEl.validity.valid) {
      return showInputError(formEl, inputEl, options);
    }
    hideInputError(formEl, inputEl, options);
  }

  _hasInvalidInput() {
    return !inputList.every((inputEl) => inputEl.validity.valid);
  }

  _disableBtn() {
    this._submitButton.classList.add(this._inactiveButtonClass);
    this._submitButton.disabled = true;
  }

  _enableBtn() {
    this._submitButton.classList.remove(this._inactiveButtonClass);
    this._submitButton.disabled = false;
  }

  _toggleButtonstate() {
    if (this._hasInvalidInput()) {
      this._disableBtn(this._submitButton, this._inactiveButtonClass);
    } else {
      this._enableBtn(this._submitButton, this._inactiveButtonClass);
    }
  }

  _setEventListeners() {
    const inputEls = [...this._element.querySelectorAll(this._inputSelector)];

    this._submitButton = this._element.querySelector(
      this._submitButtonSelector
    );

    this._toggleButtonState();

    inputEls.forEach((inputEl) => {
      inputEl.addEventListener("input", (e) => {
        checkInputValidity(this._element, inputEl, options);
        toggleButtonState();
      });
    });
  }

  enableValidation() {
    this._setEventListeners();
    this._element.addEventListener("submit", (evt) => {
      evt.preventDefault();
      // ...implementation of listener toggleButtonState
    });
  }
}
export default FormValidator;
