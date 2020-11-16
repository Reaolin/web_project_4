const imgModal = document.querySelector(".modal_type_display-image");
const imgCaption = document.querySelector(".modal__caption");
const imgPopup = document.querySelector(".modal__img");

class Card {
	constructor(
		{ data, handleCardClick, handleCardDelete, handleCardLike },
		cardTemplateSelector, userId,
	) {
		this._name = data.name;
		this._link = data.link;
		this._id = data._id;
		this._likes = data.likes;
		this._totalLikes = this._likes.length;
		this._userId = userId;

		this._handleCardClick = handleCardClick;
		this._handleCardDelete = handleCardDelete;
		this._handleCardLike = handleCardLike;
		this._cardTemplateSelector = cardTemplateSelector;
		this._card = this._getCardTemplate();
		this.heartLike = this._card.querySelector(".card__heart");
	}

	getId() {
		return this._id;
	}

	_showLikes() {
		if (this._likes.some((like) => like._id === this._userId)) {
			this.heartLike
				.classList.add("card__like");
		}
	}

	getTotalLikes() {
		this._card.querySelector(".card__like-total").textContent = this._totalLikes;
	}

	_getCardTemplate() {
		const cardTemplate = document
			.querySelector(this._cardTemplateSelector)
			.content.querySelector(".card")
			.cloneNode(true);

		return cardTemplate;
	}

	_addEventListener() {
		const cardImg = this._card.querySelector(".card__img");
		const cardHeartButton = this._card.querySelector(".card__heart");
		const cardRemoveButton = this._card.querySelector(".card__remove-btn");

		cardHeartButton.addEventListener("click", (e) => {
			this._handleHeartButton(e);
			this._handleCardLike(this.getId());
			//change heart
		});

		cardRemoveButton.addEventListener("click", (e) => {
			//remove card
			this._deleteCard();
			this._handleCardDelete(this.getId());
		});

		cardImg.addEventListener("click", () => {
			this._handleCardClick();
		});
	}

	_handleHeartButton(e) {
		function toggleLike(e) {
			e.target.classList.toggle("card__like");
		}
		toggleLike(e);
	}

	_deleteCard() {
		this._card.remove(".card");
	}

	createCard() {
		const cardElement = this._getCardTemplate(); //clones all children(img,button,title, etc) under the parent (.card)
		this._card = cardElement;

		const cardImage = this._card.querySelector(".card__img");

		this._card.querySelector(".card__title").textContent = this._name; //places the name, from the data, as the text content of the Card Title class and
		cardImage.src = this._link; //places the data from link as the src or source for the image
		cardImage.alt = this._name; //places the name as Alt for accesibility

		this._addEventListener();
		this.getTotalLikes(this._likes.length);
		this._showLikes();

		return this._card;
	}
}

export default Card;
