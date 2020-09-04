const imgModal = document.querySelector('.modal_type_display-image');
const imgCaption = document.querySelector('.modal__caption');
const imgPopup = document.querySelector('.modal__img');
const imgClsBtn = imgModal.querySelector('.modal__close');

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
//create function to toggle like button (heart)
function toggleLike(e){
    e.target.classList.toggle('card__like');
  }

imgClsBtn.addEventListener('click', () => {
    toggleModal(imgModal);
})


class Card {
    constructor (data, cardTemplateSelector){
        this._name = data.name;
        this._link = data.link;

        this._cardTemplateSelector = cardTemplateSelector;

}
_getCardTemplate(){
const cardTemplate = document
    .querySelector(this._cardTemplateSelector)
    .content
    .querySelector('.card')
    .cloneNode(true);

return cardTemplate;
};


_addEventListener(){
    const cardImg = this._card.querySelector('.card__img');
    const cardHeartButton = this._card.querySelector('.card__heart'); 
    const cardRemoveButton = this._card.querySelector('.card__remove-btn'); 
   
    cardHeartButton.addEventListener('click',(e) =>{
        this._handleHeartButton(e);
        //change heart
    })
   
    cardRemoveButton.addEventListener('click',(e) =>{
        //remove card
        this._handleCardRemove(e);
    })

    cardImg.addEventListener('click',() =>{
        imageDisplay(data);
         toggleModal(imgModal);
         //openModal()
     })

};

_handleHeartButton(e){
    toggleLike(e);
}

_handleCardRemove(e){
    e.target.closest('.card').remove();
}

_handleImageDisplay(){
    imgPopup.src = this._link
    imgPopup.alt = this._name
    imgCaption.textContent = this._name
       
}

createCard(){
    
    const cardElement = this._getCardTemplate(); //clones all children(img,button,title, etc) under the parent (.card)
   
    this._card = cardElement;

    this._card.querySelector('.card__title').textContent = this._name; //places the name, from the data, as the text content of the Card Title class and 
    this._card.querySelector('.card__img').src = this._link; //places the data from link as the src or source for the image
    this._card.querySelector('.card__img').alt = this._name; //places the name as Alt for accesibility
    
this._addEventListener();
 
return this._card;
    
        }
    }

export default Card;