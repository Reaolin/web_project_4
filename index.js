
//wrappers
const modalWindow = document.querySelector('.modal');
const editProfileModal = document.querySelector('.modal_type_edit-profile');/* variable for the whole .modal_type_edit-profile class*/
const addCardModal = document.querySelector('.modal_type_add-card');/* variable for the whole .modal_type_add-card class*/
const modalContainer = document.querySelector('.modal__container');
const modalClose = document.querySelector('.modal__close')
//buttons & DOMS
const editBtn = document.querySelector('.profile__edit-btn');/* creates the variable editBtn that equals the class .profile__edit-btn(aka we want to select the pencil, which we've named .profile__edit-btn)*/
const addCardButton = document.querySelector(".profile__add-btn");/* creates the variable editBtn that equals the class .profile__add-btn(aka we want to select the plus sing, which we've named .profile__edit-btn)*/
const editProfileClsBtn = editProfileModal.querySelector('.modal__close');/* creates the variable editProfileClsBtn that equals the class .modal__close (aka 'X' image we've made, in order to click on the x) inside the edit profile modal*/
const addCardClsBtn = addCardModal.querySelector('.modal__close');/* creates the variable addCardClsBtn that equals the class .modal__close (aka 'X' image we've made, in order to click on the x) inside the add card modal*/

//Form Input Values

const inputName = document.querySelector('.form__name-input'); /* creates a constant variable for the .form__name-input class */
const inputOccuppation = document.querySelector('.form__job-input');/* creates a constant variable for the .form__job-input class */
const profileName = document.querySelector('.profile-info__title');/* creates a constant variable for the .profile-info__title class */
const profileOccuppation = document.querySelector('.profile-info__sub-title');/* creates a constant variable for the .profile-info__sub-title class */
const formProfile = document.querySelector('.form_type_edit-profile'); //creates the constant variable form for selecting the form class (which contains all the form info)

//card variables
const formCard = document.querySelector('.form_type_add-card');
const inputTitle = document.querySelector('.form__title-input'); /* creates a constant variable for the .form__title-input class */
const inputUrl = document.querySelector('.form__url-input');
const photoGrid = document.querySelector('.photo-grid');


function toggleModal (modal){
    modal.classList.toggle('modal_display'); /* creates the function that will toggle the .modal_display class on or off*/
    /* .modal_display changes the display: none to display:flex */
    inputName.value = profileName.textContent; //points back to text already containted in the HTML tags to fill the values 
    inputOccuppation.value = profileOccuppation.textContent; 
    
}

editBtn.addEventListener('click', () => {
    toggleModal(editProfileModal);
}); /* what it will do when we click on the editBtn (adds the modal_display class to editProfileModal or toggles the modal_display) */
editProfileClsBtn.addEventListener('click', () => {
    toggleModal(editProfileModal);
}); /* what it will do when we select the variable(read above) editProfileClsBtn */

addCardButton.addEventListener('click', () => {
    toggleModal(addCardModal);
    inputTitle.value = 'title';
    inputUrl.value = 'url';
}); /* what it will do when we select the variable(read above) */
addCardClsBtn.addEventListener('click', () => {
    toggleModal(addCardModal);
}); /* what it will do when we select the variable(read above)*/


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



//create function to toggle like button (heart)
function toggleLike(e){
    e.target.classList.toggle('card__like');
  }

//image display variables
const imgModal = document.querySelector('.modal_type_display-image');
const imgCaption = document.querySelector('.modal__caption');
const imgPopup = document.querySelector('.modal__img');
const imgClsBtn = imgModal.querySelector('.modal__close');

//creates image pop-up function
function imageDisplay(data){
    imgPopup.src = data.link
    imgPopup.alt = data.name
    imgCaption.textContent = data.name
    
}
//creates clickable close button for image
imgClsBtn.addEventListener('click', () => {
    toggleModal(imgModal);
})


//initial cards autocreated each time the page refreshes
const initialCards = [
    {
        name: "Yosemite Valley",
        link: "./images/Yosemite.png"
    },
    {
        name: "A Tree Somewhere",
        link: "https://images.unsplash.com/photo-1591971737811-cf7de8c11f32?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
    },
    {
        name: "The Moon",
        link: "https://images.unsplash.com/photo-1592035187437-47c0fe77a452?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1391&q=80"
    },
    {
        name: "Latemar",
        link: "./images/Latemar.png"
    },
    {
        name: "Chilhowee Mountain",
        link: "https://images.unsplash.com/photo-1590096598321-a42e180df31d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=802&q=80"
    },
    {
        name: "Waterfall",
        link: "https://images.unsplash.com/photo-1541294725825-94318746d378?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
    }
];

const cardTemplate = document.querySelector('.card-template').content.querySelector('.card');

const createCard = (data) =>{
    
    const cardElement = cardTemplate.cloneNode(true); //clones all children(img,button,title, etc) under the parent (.card)

    const cardImg = cardElement.querySelector('.card__img');
    const cardTitle = cardElement.querySelector('.card__title');
    const cardHeartButton = cardElement.querySelector('.card__heart'); 
    const cardRemoveButton = cardElement.querySelector('.card__remove-btn'); 
    //calls all elements of div or the card class

    
    cardTitle.textContent = data.name; //places the name, from the data, as the text content of the Card Title class and 
    cardImg.src = data.link; //places the data from link as the src or source for the image
    cardImg.alt = data.name; //places the name as Alt for accesibility
    cardHeartButton.addEventListener('click',(e) =>{
        toggleLike(e);
        //change heart
    })
   
    cardRemoveButton.addEventListener('click',(e) =>{
        //remove card
        e.target.closest('.card').remove();
    })
      
    cardImg.addEventListener('click',() =>{
       imageDisplay(data);
        toggleModal(imgModal);
        //openModal()
    })

    return cardElement;
    
}

//adding a new card
formCard.addEventListener('submit', (e) => {
    e.preventDefault(); //prevents the page from refreshing (more specifically, it prevents the default action of the event 'submit', one of which is refreshing the browser)
    const newCard = () => {
        photoGrid.prepend(createCard({name:inputTitle.value, link: inputUrl.value}));
        }
    toggleModal(addCardModal);

    return newCard();
});


const renderCard = (data) => {
    photoGrid.append(createCard(data));

}

initialCards.forEach((data) => {
    renderCard(data);

});



//escape and click functions

function closeModal(evt) {
    if(evt.target !== modalContainer || modalClose){
    toggleModal(evt.target.closest('.modal'));}
  }

  function escape(e) {
    if (e.key === 'Escape') {
      toggleModal(document.querySelector('.modal_display'));
    }
    e.target.removeEventListener('keyup', escape);
  }
  window.addEventListener('keyup', escape);

  

const closeWindows = () => {
    const popUps = Array.from(document.querySelectorAll('.modal'));
  

    popUps.forEach((popup) => {
        popup.addEventListener("click", closeModal)}
         
    )};
  
  closeWindows();
  

