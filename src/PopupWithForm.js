import Popup from "./Popup.js";

class PopupWithForm extends Popup {
	constructor({ popupSelector, handleSubmitForm }) {
		super(popupSelector);

		const formContainer = this._popupElement.querySelector(".modal__form");
		this._handleSubmitForm = handleSubmitForm;
		this._container = formContainer;
	}

	_getInputValues() {
		this._inputList = this._popupElement.querySelectorAll(".modal__input");
		this._inputValues = {};
		this._inputList.forEach(
			(input) => (this._inputValues[input.name] = input.value)
		);
		return this._inputValues;
	}

	setEventListeners() {
		//will create a function on what to do when we click on submit for the profile
		this._container.addEventListener("submit", (e) => {
			e.preventDefault();
			this._handleSubmitForm(this._getInputValues());
			this.close();
		});
		super.setEventListeners();
	}
	close() {
		this._container.reset();

		super.close();
	}
}

export default PopupWithForm;
