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

//wrappers
const editProfileModal = document.querySelector(
	".modal_type_edit-profile"
); /* variable for the whole .modal_type_edit-profile class*/
const addCardModal = document.querySelector(
	".modal_type_add-card"
); /* variable for the whole .modal_type_add-card class*/

const editProfileForm = editProfileModal.querySelector(".modal__form");
const addCardForm = addCardModal.querySelector(".modal__form");

//validation
const editProfileValidator = new FormValidator(dataConfig, editProfileForm);
const addCardValidator = new FormValidator(dataConfig, addCardForm);

addCardValidator.enableValidation();
editProfileValidator.enableValidation();

//buttons & DOMS
const editBtn = document.querySelector(
	".profile__edit-btn"
); /* creates the variable editBtn that equals the class .profile__edit-btn(aka we want to select the pencil, which we've named .profile__edit-btn)*/
const addCardButton = document.querySelector(
	".profile__add-btn"
); /* creates the variable editBtn that equals the class .profile__add-btn(aka we want to select the plus sing, which we've named .profile__edit-btn)*/

const profileName = document.querySelector(".profile-info__title");
const profileJob = document.querySelector(".profile-info__sub-title");
const formName = document.querySelector(
	".form__name-input"
); /* creates a constant variable for the .form__name-input class */
const formJob = document.querySelector(
	".form__job-input"
); /* creates a constant variable for the .form__job-input class */

//userInfo
const userInfo = new UserInfo(profileName, profileJob);
//Form Popup
const formPopup = new PopupWithForm({
	popupSelector: editProfileModal,
	handleSubmitForm: () => {
		userInfo.setUserInfo(formName.value, formJob.value);
	},
});
formPopup.setEventListeners();

editBtn.addEventListener("click", () => {
	const currentUserInfo = userInfo.getUserInfo();
	formName.value = currentUserInfo.name;
	formJob.value = currentUserInfo.job;
	formPopup.open();
});
//card variables
const inputTitle = document.querySelector(
	".form__title-input"
); /* creates a constant variable for the .form__title-input class */
const inputUrl = document.querySelector(".form__url-input");
const photoGrid = document.querySelector(".photo-grid");

//initial cards autocreated each time the page refreshes

//image display variables
const imgModal = document.querySelector(".modal_type_display-image");
const cardTemplateSelector = ".card-template";

const enlargeImage = new PopupWithImage(imgModal);
enlargeImage.setEventListeners();

const api = new Api({
	baseURL: "https://around.nomoreparties.co/v1/group-5",
	headers: {
		authorization: "97759523-392d-4e85-9860-1537a0a1a99b",
		"Content-Type": "application/json",
	},
});

//get cards from API
api.getInitialCards().then((res) => {
	//Creates Initial Card set
	const cardGrid = new Section(
		{
			data: res,
			renderer: (data) => {
				const newCards = new Card(
					{
						data,
						handleCardClick: () => {
							enlargeImage.open(data);
						},
					},
					cardTemplateSelector
				);

				cardGrid.addItem(newCards.createCard());
			},
		},
		photoGrid
	);
	cardGrid.renderItems();

	//CardPopup
	const cardPopup = new PopupWithForm({
		popupSelector: addCardModal,
		handleSubmitForm: (data) => {
			api.addCard(data).then((res) => {
				const card = new Card(
					{
						data,
						handleCardClick: () => {
							enlargeImage.open({ name: data.name, link: data.link });
						},
					},
					cardTemplateSelector
				);
				cardGrid.addItem(card.createCard());
				addCardValidator.makeButtonInactive();
			});
		},
	});
	cardPopup.setEventListeners();

	addCardButton.addEventListener("click", () => {
		addCardValidator.makeButtonInactive();
		cardPopup.open();
	});
});

api.getUserInfo().then((res) => {
	console.log("!!", res);
	userInfo.setUserInfo(res.name, res.about);
});
