    import Popup from './Popup.js';

    //Form Input Values

const inputName = document.querySelector('.form__name-input'); /* creates a constant variable for the .form__name-input class */
const inputOccuppation = document.querySelector('.form__job-input');/* creates a constant variable for the .form__job-input class */
const profileName = document.querySelector('.profile-info__title');/* creates a constant variable for the .profile-info__title class */
const profileOccuppation = document.querySelector('.profile-info__sub-title');/* creates a constant variable for the .profile-info__sub-title class */


    class PopupWithForm extends Popup{
        constructor({handleSubmitForm, popupSelector}){
        super(popupSelector);
        this._handleSubmitForm = handleSubmitForm;
        

        }

        _getInputValues(){
        this._inputList = this._popupElement.querySelectorAll('.modal__input');
        this._inputValues = {};
        this._inputList.forEach(input => this._inputValues[input.name] = input.value);
        return this._inputValues;

        };

        setEventListeners(){
            this._popupElement.addEventListener('submit', (e)=> {
                e.preventDefault();
                this._handleSubmitForm(this._getInputValues());

            });
            super.setEventListeners();
        };
        close(){
            this._popupElement.reset();
           
        super.close();
        };

    }

    export default PopupWithForm;
    //will create a function on what to do when we click on submit for the profile

    