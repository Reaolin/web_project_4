/*
//FORM DATA

    //will create a function on what to do when we click on submit for the profile
    formProfile.addEventListener('submit', (e) => {
        e.preventDefault(); //prevents the page from refreshing (more specifically, it prevents the default action of the event 'submit', one of which is refreshing the browser)
    
    
        profileName.textContent = inputName.value; //changes the text that is located in between the HTML tags with the class name that the inputName constant variable points to
    //into the text that you enter within the class(read input field) that the constant variable profileName points to 
        profileOccuppation.textContent = inputOccuppation.value; //changes the text that is located in between the HTML tags with the class name that the inputOccu constant variable points to
    //into the text that you enter within the class(read input field) that the constant variable profileOccup points to 
        toggleModal(editProfileModal);
});
*/

/*
//escape and click functions

function closeModal(evt) {
    if(evt.target === evt.target.closest('.modal_display')){
    toggleModal(evt.target.closest('.modal'));}
  }


 
const closeWindows = () => {
    const popUps = Array.from(document.querySelectorAll('.modal'));

    popUps.forEach((popup) => {
        popup.addEventListener("click", closeModal)}
         
    )};
  
  closeWindows();
  
*/

//adding a new card
/*formCard.addEventListener('submit', (e) => {
    e.preventDefault(); //prevents the page from refreshing (more specifically, it prevents the default action of the event 'submit', one of which is refreshing the browser)
    const newCard = () => {
        const card = new Card({name: inputTitle.value, link: inputUrl.value},cardTemplateSelector)
        photoGrid.prepend(card.createCard());
        }
    toggleModal(addCardModal);
    return newCard();
});
*/
//buttons & DOMS
const editBtn = document.querySelector('.profile__edit-btn');/* creates the variable editBtn that equals the class .profile__edit-btn(aka we want to select the pencil, which we've named .profile__edit-btn)*/
const addCardButton = document.querySelector(".profile__add-btn");/* creates the variable editBtn that equals the class .profile__add-btn(aka we want to select the plus sing, which we've named .profile__edit-btn)*/
const editProfileClsBtn = editProfileModal.querySelector('.modal__close');/* creates the variable editProfileClsBtn that equals the class .modal__close (aka 'X' image we've made, in order to click on the x) inside the edit profile modal*/
const addCardClsBtn = addCardModal.querySelector('.modal__close');/* creates the variable addCardClsBtn that equals the class .modal__close (aka 'X' image we've made, in order to click on the x) inside the add card modal*/


editBtn.addEventListener('click', () => {
    toggleModal(editProfileModal);
}); /* what it will do when we click on the editBtn (adds the modal_display class to editProfileModal or toggles the modal_display) */

editProfileClsBtn.addEventListener('click', () => {
    toggleModal(editProfileModal);
}); /* what it will do when we select the variable(read above) editProfileClsBtn */

addCardButton.addEventListener('click', () => {
    toggleModal(addCardModal);
}); /* what it will do when we select the variable(read above) */

addCardClsBtn.addEventListener('click', () => {
    toggleModal(addCardModal);
}); /* what it will do when we select the variable(read above)*/

//adding a new card
/*
formCard.addEventListener('submit', (e) => {
    e.preventDefault(); //prevents the page from refreshing (more specifically, it prevents the default action of the event 'submit', one of which is refreshing the browser)
    const newCard = () => {
        const card = new Card({
            data: {name: inputTitle.value, link: inputUrl.value}, 
            handleCardClick: (data) => {
                imagePopup.open({ data });
            }
        },cardTemplateSelector)
        photoGrid.prepend(card.createCard());
        }
    toggleModal(addCardModal);
    return newCard();

});
*/

/*
const renderCard = (data) => {
    const card = new Card(data,cardTemplateSelector )
    photoGrid.append(card.createCard());

}

initialCards.forEach((data) => {
    renderCard(data);

});
*/

//creates clickable close button for image
const imgClsBtn = imgModal.querySelector('.modal__close');

imgClsBtn.addEventListener('click', () => {
    toggleModal(imgModal);
})

/*
editProfileClsBtn.addEventListener('click', () => {
    toggleModal(editProfileModal);
}); /* what it will do when we select the variable(read above) editProfileClsBtn */


/*
addCardClsBtn.addEventListener('click', () => {
    toggleModal(addCardModal);
}); /* what it will do when we select the variable(read above)*/

