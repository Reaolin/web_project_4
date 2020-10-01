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


