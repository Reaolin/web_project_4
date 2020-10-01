import Popup from './Popup.js';

class PopupWithImage extends Popup{
    constructor(popupSelector){
        super(popupSelector);

    }

    open(link, caption){
        const viewImage = this._popupElement.querySelector(link);
        const viewCaption = this._popupElement.querySelector(caption);
       
        viewImage.src = link;
        viewImage.alt = caption;
        viewCaption.textContent = caption;

        super.open();
    }
}

export default PopupWithImage;

const imgCaption = document.querySelector('.modal__caption');
const imgPopup = document.querySelector('.modal__img');