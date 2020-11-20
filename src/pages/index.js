import "./index.css";
import FormValidator from "../components/FormValidator.js";
import Card from "../components/Card.js";
import PopupWithImage from "../components/PopupWithImage.js";
import Section from "../components/Section.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import Api from "../components/Api.js";

const dataConfig = {
	inputSelector: ".modal__input",
	submitButtonSelector: ".modal__button",
	inactiveButtonClass: "modal__button_disabled",
	inputErrorClass: "modal__input_type_error",
	errorClass: "modal__error_visible",
};

//creates the API info
const api = new Api({
	baseURL: "https://around.nomoreparties.co/v1/group-5",
	headers: {
		authorization: "97759523-392d-4e85-9860-1537a0a1a99b",
		"Content-Type": "application/json",
	},
});

//wrappers
const editProfileModal = document.querySelector(
	".modal_type_edit-profile"
); /* variable for the whole .modal_type_edit-profile class*/
const addCardModal = document.querySelector(
	".modal_type_add-card"
); /* variable for the whole .modal_type_add-card class*/

const editAvatarModal = document.querySelector(".modal_type_edit-avatar");
/* variable for the whole .modal_type_add-card class*/

const editProfileForm = editProfileModal.querySelector(".modal__form");
const addCardForm = addCardModal.querySelector(".modal__form");
const editAvatarForm = editAvatarModal.querySelector(".modal__form");

//validation
const editProfileValidator = new FormValidator(dataConfig, editProfileForm);
const addCardValidator = new FormValidator(dataConfig, addCardForm);
const editAvatarValidator = new FormValidator(dataConfig, editAvatarForm);

addCardValidator.enableValidation();
editProfileValidator.enableValidation();
editAvatarValidator.enableValidation();

//buttons & DOMS
const editBtn = document.querySelector(
	".profile__edit-btn"
); /* creates the variable editBtn that equals the class .profile__edit-btn(aka we want to select the pencil, which we've named .profile__edit-btn)*/
const addCardButton = document.querySelector(
	".profile__add-btn"
); /* creates the variable editBtn that equals the class .profile__add-btn(aka we want to select the plus sing, which we've named .profile__edit-btn)*/
const editAvatarBtn = document.querySelector(".profile__avatar_edit-btn");

const profileName = document.querySelector(".profile-info__title");
const profileJob = document.querySelector(".profile-info__sub-title");
const formName = document.querySelector(
	".form__name-input"
); /* creates a constant variable for the .form__name-input class */
const formJob = document.querySelector(
	".form__job-input"
); /* creates a constant variable for the .form__job-input class */
const avatarImage = document.querySelector(".profile__avatar"); //creates a constant variable for the .profile__avatar class

//userInfo
const userInfo = new UserInfo(profileName, profileJob, avatarImage);
//Form Popup
const formPopup = new PopupWithForm({
	popupSelector: editProfileModal,
	handleSubmitForm: (data) => {
		api
			.setUserInfo({ name: data.name, about: data.occupation })
			.then(() => {
				userInfo.setUserInfo(formName.value, formJob.value);
				loading(false, editProfileModal);
				
			})
			.then(()=>{
				formPopup.close();
			})

			.catch((err) => console.log(err));
	},
});
formPopup.setEventListeners();

editBtn.addEventListener("click", () => {
	const currentUserInfo = userInfo.getUserInfo();
	formName.value = currentUserInfo.name;
	formJob.value = currentUserInfo.job;
	formPopup.open();
});

//image display variables
const imgModal = document.querySelector(".modal_type_display-image");
const cardTemplateSelector = ".card-template";

const enlargeImage = new PopupWithImage(imgModal);
enlargeImage.setEventListeners();

//card variables
const photoGrid = document.querySelector(".photo-grid");
/*
function adding(isLoading, modal) {
	if (isLoading) {
		modal.querySelector(".modal__button").textContent = "Adding...";
	} else {
		modal.querySelector(".modal__button").textContent = "Save";
	}
}
*/
function handleIsLoading(isLoading, modal, textInput) {
	if (isLoading) {
		modal.querySelector(".modal__button").textContent = textInput;
	} else {
		modal.querySelector(".modal__button").textContent = textInput;
	}
}

const deleteCardModal = document.querySelector(".modal_type_delete-card");

const deleteCard = new PopupWithForm({
	popupSelector: deleteCardModal,
});
deleteCard.setEventListeners();



api.getUserInfo().then((res) => {
	const userIdInfo = res._id;
	console.log("!!", res._id);
	console.log("11", userIdInfo);
	userInfo.setUserInfo(res.name, res.about);
	avatarImage.src = res.avatar;

	//initial cards autocreated each time the page refreshes
	//get cards from API
	api.getInitialCards().then((res) => {
		console.log(res);
		//Creates Initial Card set
		const cardGrid = new Section(
			{
				data: res,
				renderer: placeCards,
			},
			photoGrid
		);
		cardGrid.renderItems();

		//CardPopup
		const cardPopup = new PopupWithForm({
			popupSelector: addCardModal,
			handleSubmitForm: (data) => {
				handleIsLoading(true, addCardModal, "Adding...");
				api
					.addCard(data)
					.then((res) => {
						placeCards(res);
						placeCards.showLikes();
						addCardValidator.makeButtonInactive();
					})
					.then(() => {
						cardPopup.close();
					})
					.catch((err) => console.log(err));
			},
		});
		cardPopup.setEventListeners();

		addCardButton.addEventListener("click", () => {
			addCardValidator.makeButtonInactive();
			cardPopup.open();
		});

		function placeCards(data) {
			const newCards = new Card(
				{
					data,
					handleCardClick: () => {
						enlargeImage.open(data);
					},
					handleCardDelete: (cardId) => {
						deleteCard.open();
						deleteCard.setSubmit(() => {
							handleIsLoading(true, deleteCardModal, "Wait for it....");
							api.removeCard(cardId).then(() => {
								newCards.deleteCard();
								handleIsLoading(false, deleteCardModal, "Goodbye!");
								deleteCard.close();
							});
						});
					},
					handleCardLike: (cardId) => {
						if (newCards.heartLike.classList.contains("card__like")) {
							api
								.removeLikes(cardId)
								.then((res) => newCards.getTotalLikes(res.likes.length))
								.then(() => newCards.heartLike.classList.remove("card__like"))
								.catch((err) => console.log(err));
						} else {
							api
								.addLikes(cardId)
								.then((res) => newCards.getTotalLikes(res.likes.length))
								.then(() => newCards.heartLike.classList.add("card__like"))
								.catch((err) => console.log(err));
						}
					},
				},
				cardTemplateSelector,
				userIdInfo
			);
			cardGrid.addItem(newCards.createCard());
		}
	});
});
/*function loading(isLoading, modal) {
	if (isLoading) {
		modal.querySelector(".modal__button").textContent = "Saving...";
	} else {
		modal.querySelector(".modal__button").textContent = "Save";
	}
}*/

function handleAvatarEdit(data) {
	handleIsLoading(true, editAvatarModal, "Saving...");
	api
		.setAvatar({
			avatar: data.avatar,
		})
		.then((res) => {
			avatarImage.src = res.avatar;
			handleIsLoading(false, editAvatarModal, "Save");
			editAvatar.close();
		})
		.catch((err) => console.log(err));
}

const editAvatar = new PopupWithForm({
	popupSelector: editAvatarModal,
	handleSubmitForm: (data) => {
		handleAvatarEdit(data);
	},
});

editAvatarBtn.addEventListener("click", () => {
	editAvatar.open();
	editAvatarValidator.makeButtonInactive();
});

editAvatar.setEventListeners();
