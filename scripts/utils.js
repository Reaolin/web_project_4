const inputName = document.querySelector('.form__name-input'); 
const inputOccuppation = document.querySelector('.form__job-input');
const profileName = document.querySelector('.profile-info__title');
const profileOccuppation = document.querySelector('.profile-info__sub-title');

function escape(e) {
    if (e.key === 'Escape') {
      toggleModal(document.querySelector('.modal_display'));
    }
}
function toggleModal (modal){
    modal.classList.toggle('modal_display'); /* creates the function that will toggle the .modal_display class on or off*/
    /* .modal_display changes the display: none to display:flex */
    inputName.value = profileName.textContent; //points back to text already containted in the HTML tags to fill the values 
    inputOccuppation.value = profileOccuppation.textContent; 
    
    if (modal.classList.contains('modal_display')) {
        window.addEventListener('keyup', escape);
      } else{
        window.removeEventListener('keyup', escape);
      }
    
}

export default toggleModal;