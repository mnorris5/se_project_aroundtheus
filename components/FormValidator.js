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
    submitButton.classList.add(inactiveButtonClass);
    submitButton.disabled = true;
  }

  _enableBtn() {
    submitButton.classList.remove(inactiveButtonClass);
    submitButton.disabled = false;
  }

  _toggleButtonstate() {
    if (hasInvalidInput(inputEls)) {
      disableSubmitButton(submitButton, inactiveButtonClass);
    } else {
      enableSubmitButton(submitButton, inactiveButtonClass);
    }
  }

  _setEventListeners() {
    const { inputSelector } = options;
    const inputEls = [...formEl.querySelectorAll(inputSelector)];

    const submitButton = formEl.querySelector(config.submitButtonSelector);

    toggleButtonState(inputEls, submitButton, options);

    inputEls.forEach((inputEl) => {
      inputEl.addEventListener("input", (e) => {
        checkInputValidity(formEl, inputEl, options);
        toggleButtonState(inputEls, submitButton, options);
      });
    });
  }

  enableValidation() {
    this._setEventListeners();
    this._element.addEventListener("submit", (evt) => {
      evt.preventDefault();
      // ...implementation of listener
    });
  }
}
export default FormValidator;
