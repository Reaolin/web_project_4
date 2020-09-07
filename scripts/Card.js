import toggleModal from './index.js';

const imgModal = document.querySelector('.modal_type_display-image');
const imgCaption = document.querySelector('.modal__caption');
const imgPopup = document.querySelector('.modal__img');



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
        this._handleImageDisplay();
         toggleModal(imgModal);
         //openModal()
     })

};

_handleHeartButton(e){
    function toggleLike(e){
        e.target.classList.toggle('card__like');
      }
      toggleLike(e);
}

_handleCardRemove(){
    this._card.closest('.card').remove();
}

_handleImageDisplay(){
    imgPopup.src = this._link
    imgPopup.alt = this._name
    imgCaption.textContent = this._name
       
}

createCard(){
    
    const cardElement = this._getCardTemplate(); //clones all children(img,button,title, etc) under the parent (.card)
    this._card = cardElement;
    
    const cardImage = 
        this._card
        .querySelector('.card__img');
        
    

    this._card.querySelector('.card__title').textContent = this._name; //places the name, from the data, as the text content of the Card Title class and 
    cardImage.src = this._link; //places the data from link as the src or source for the image
    cardImage.alt = this._name; //places the name as Alt for accesibility
    
this._addEventListener();
 
return this._card;
    
        }
    }

export default Card;