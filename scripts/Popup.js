class Popup{
    constructor(popupSelector){
        this._popupElement = document.querySelector(popupSelector);
        this._handleEscClose = this._handleEscClose.bind(this);
    }

        open(){
            this._popupElement.classList.add('.modal_display');
            document.addEventListener('keyup', this._handleEscClose);

        };

        close(){
            this._popupElement.classList.remove('.modal_display');
            document.removeEventListener('keyup', this._handleEscClose);



        };

        _handleEscClose(e){
            if (e.key === 'Escape') {
                this._close();
              }

        };

        setEventListeners(){
            this._popupElement.querySelector('.modal__close').addEventListener('click', (e)=>{
                this._close();
            });

        };
    }


export default Popup;

// new Popup('.modal__form') ---example