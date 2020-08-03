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
    const cardImg = cardElement.querySelector('.card__img');
    const cardHeartButton = cardElement.querySelector('.card__heart'); 
    const cardRemoveButton = cardElement.querySelector('.card__remove-btn'); 
   
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

};

createCard(){
    
    const cardElement = cardTemplate //clones all children(img,button,title, etc) under the parent (.card)
    const cardTitle = cardElement.querySelector('.card__title');
   //calls all elements of div or the card class
    
    cardTitle.textContent = this._name; //places the name, from the data, as the text content of the Card Title class and 
    cardImg.src = this._link; //places the data from link as the src or source for the image
    cardImg.alt = this._name; //places the name as Alt for accesibility
    
_addEventListener();
 
return cardElement;
    
        }
    }
