const editBtn = document.querySelector('.profile__edit-btn');/* creates the variable editBtn that equals the class .profile__edit-btn(aka we want to select the pencil, which we've named .profile__edit-btn)*/
const modalClsBtn = document.querySelector('.modal__close');/* creates the variable modalClsBtn that equals the class .modal__close (aka 'X' image we've made, in order to click on the x)*/
const modal = document.querySelector('.modal');/* variable for the whole .modal class*/
const inputName = document.querySelector('.form__name-input'); /* creates a constant variable for the .form__name-input class */
const inputOccup = document.querySelector('.form__job-input');/* creates a constant variable for the .form__jon-input class */
const profileName = document.querySelector('.profile-info__title');/* creates a constant variable for the .profile-info__title class */
const profileOccup = document.querySelector('.profile-info__sub-title');/* creates a constant variable for the .profile-info__sub-title class */
const form = document.querySelector('.form'); //creates the constant variable form for selecting the form class (which contains all the form info)



function toggleModal (){
    modal.classList.toggle('modal_display'); /* creates the function that will toggle the .modal_display class on or off*/
    /* .modal_display changes the display: none to display:flex */
    inputName.value = profileName.textContent; //points back to text already containted in the HTML tags to fill the values 
    inputOccup.value = profileOccup.textContent; 
}
editBtn.addEventListener('click', toggleModal); /* what it will do when we select the variable(read above) editBtn */
modalClsBtn.addEventListener('click', toggleModal); /* what it will do when we select the variable(read above) modalClsBtn */

//will create a function on what to do when we click on submit
form.addEventListener('submit', (e) => {
    e.preventDefault(); //prevents the page from refreshing (more specifically, it prevents the default action of the event 'submit', one of which is refreshing the browser)
    
    
    profileName.textContent = inputName.value; //changes the text that is located in between the HTML tags with the class name that the inputName constant variable points to
    //into the text that you enter within the class(read input field) that the constant variable profileName points to 
    profileOccup.textContent = inputOccup.value; //changes the text that is located in between the HTML tags with the class name that the inputOccu constant variable points to
    //into the text that you enter within the class(read input field) that the constant variable profileOccup points to 
    toggleModal();
})
