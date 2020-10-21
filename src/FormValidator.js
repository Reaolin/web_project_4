class FormValidator {
	constructor(settings, formElement) {
		this._inputSelector = settings.inputSelector;
		this._submitButtonSelector = settings.submitButtonSelector;
		this._inactiveButtonClass = settings.inactiveButtonClass;
		this._inputErrorClass = settings.inputErrorClass;
		this._errorClass = settings.errorClass;
		this._formElement = formElement;

		this.inputs = Array.from(
			this._formElement.querySelectorAll(this._inputSelector)
		);
		this.button = this._formElement.querySelector(this._submitButtonSelector);
	}
	_showErrorMessage(input) {
		const error = this._formElement.querySelector(`#${input.id}-error`);
		error.textContent = input.validationMessage;
		error.classList.add(this._errorClass);
		input.classList.add(this._inputErrorClass);
	}
	_hideErrorMessage(input) {
		const error = this._formElement.querySelector(`#${input.id}-error`);
		error.textContent = input.validationMessage;
		error.classList.remove(this._errorClass);
		input.classList.remove(this._inputErrorClass);
	}
	_checkInputValidity(input) {
		if (input.validity.valid) {
			this._hideErrorMessage(input);
		} else {
			this._showErrorMessage(input);
		}
	}
	_getInvalidInput() {
		return this.inputs.every((input) => input.validity.valid);
	}
	_toggleButtonState() {
		if (this._getInvalidInput(this.inputs)) {
			this.button.classList.remove(this._inactiveButtonClass);
			this.button.disabled = false;
		} else {
			this.makeButtonInactive();
		}
	}
	makeButtonInactive() {
		this.button.classList.add(this._inactiveButtonClass);
		this.button.disabled = true;
	}
	_setEventListener() {
		this.inputs.forEach((input) => {
			input.addEventListener("input", () => {
				this._checkInputValidity(input);
				this._toggleButtonState();
			});
		});
	}
	enableValidation() {
		this._formElement.addEventListener("submit", (evt) => {
			evt.preventDefault();
			this._toggleButtonState();
		});
		this._setEventListener();
	}
}
export default FormValidator;
