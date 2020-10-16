import Popup from "./Popup.js";

class PopupWithImage extends Popup {
	constructor(popupSelector) {
		super(popupSelector);
		const viewImage = this._popupElement.querySelector(".modal__img");
		const viewCaption = this._popupElement.querySelector(".modal__caption");
	}

	open({ name, link }) {
		viewImage.src = link;
		viewImage.alt = name;
		viewCaption.textContent = name;

		super.open();
	}
}

export default PopupWithImage;
