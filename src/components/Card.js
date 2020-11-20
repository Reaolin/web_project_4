const imgModal = document.querySelector(".modal_type_display-image");
const imgCaption = document.querySelector(".modal__caption");
const imgPopup = document.querySelector(".modal__img");

class Card {
	constructor(
		{ data, handleCardClick, handleCardDelete, handleCardLike },
		cardTemplateSelector,
		userID
	) {
		this._name = data.name;
		this._link = data.link;
		this._id = data._id;
		this._likes = data.likes;
		this._owner = data.owner;

		this._userID = userID;
		this._handleCardClick = handleCardClick;
		this._handleCardDelete = handleCardDelete;
		this._handleCardLike = handleCardLike;
		this._cardTemplateSelector = cardTemplateSelector;
		this._cardElement = this._getCardTemplate(); //clones all children(img,button,title, etc) under the parent (.card)
		this._card = this._cardElement;
		this.heartLike = this._card.querySelector(".card__heart");
		this._cardRemoveButton = this._card.querySelector(".card__remove-btn");
	}

	getId() {
		return this._id;
	}

	getTotalLikes(allTheLikes) {
		this._card.querySelector(".card__like-total").textContent = allTheLikes;
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

		cardHeartButton.addEventListener("click", () => {
			this._handleCardLike(this.getId());
			//change heart
		});

		this._cardRemoveButton.addEventListener("click", (e) => {
			//remove card
			//this._deleteCard();
			this._handleCardDelete(this.getId());
		});

		cardImg.addEventListener("click", () => {
			this._handleCardClick();
		});
	}

	showRemoveButton() {
		//don't show remove button
		if (this._owner._id !== this._userID) {
			this._cardRemoveButton.style.display = "none";
		}
	}

	deleteCard() {
		this._card.remove(".card");
	}
	showLikes() {
		if (this._likes.some((like) => like._id === this._userID)) {
			this.heartLike.classList.add("card__like");
			//console.log(this._likes);
			//console.log(this.heartLike);
		}
	}
	createCard() {
		const cardImage = this._card.querySelector(".card__img");

		this._card.querySelector(".card__title").textContent = this._name; //places the name, from the data, as the text content of the Card Title class and
		cardImage.src = this._link; //places the data from link as the src or source for the image
		cardImage.alt = this._name; //places the name as Alt for accesibility

		this._addEventListener();
		this.getTotalLikes(this._likes.length);
		this.showLikes();
		this.showRemoveButton();

		return this._card;
	}
}

export default Card;
