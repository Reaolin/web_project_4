import Popup from './Popup.js';

class PopupWithImage extends Popup{
    constructor(popupSelector){
        super(popupSelector);

    }

    open(link, caption){
        const viewImage = this._popupElement.querySelector('.modal__img');
        const viewCaption = this._popupElement.querySelector('.modal__caption');
       
        viewImage.src = link;
        viewImage.alt = link;
        viewCaption.textContent = caption;

        super.open();
    }
}

export default PopupWithImage;

