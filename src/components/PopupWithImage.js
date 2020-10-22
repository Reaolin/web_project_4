import Popup from "./Popup.js";

class PopupWithImage extends Popup {
	constructor(popupSelector) {
		super(popupSelector);
		this._card = popupSelector;
		this._viewImage = this._popupElement.querySelector(".modal__img");
		this._viewCaption = this._popupElement.querySelector(".modal__caption");
	}

	open({ name, link }) {
		this._card.classList.add("modal_type_display-image");

		this._viewImage.src = link;
		this._viewImage.alt = name;
		this._viewCaption.textContent = name;

		super.open();
	}
}

export default PopupWithImage;
