import Popup from './Popup.js';

class PopupWithImage extends Popup{
    constructor(popupSelector){
        super(popupSelector);

    }

    open({name, link}){
        const viewImage = this._popupElement.querySelector('.modal__img');
        const viewCaption = this._popupElement.querySelector('.modal__caption');
       
        viewImage.src = link;
        viewImage.alt = name;
        viewCaption.textContent = name;

        super.open();
    }
}

export default PopupWithImage;

