    import Popup from './Popup.js';

    //Form Input Values

const inputName = document.querySelector('.form__name-input'); /* creates a constant variable for the .form__name-input class */
const inputOccuppation = document.querySelector('.form__job-input');/* creates a constant variable for the .form__job-input class */
const profileName = document.querySelector('.profile-info__title');/* creates a constant variable for the .profile-info__title class */
const profileOccuppation = document.querySelector('.profile-info__sub-title');/* creates a constant variable for the .profile-info__sub-title class */


    class PopupWithForm extends Popup{
        constructor(popupSelector){
        super(popupSelector);
        }

        _getInputValues(){
            this._inputs = this._popupElement.querySelectorAll('.modal__input');

        
            profileName.textContent = inputName.value; //changes the text that is located in between the HTML tags with the class name that the inputName constant variable points to
            //into the text that you enter within the class(read input field) that the constant variable profileName points to 
            profileOccuppation.textContent = inputOccuppation.value;

        };

        setEventListeners(){
            this._popupElement
            addEventListener
            ('submit', (e)=> {
                e.preventDefault();

            });
            super.setEventListeners();
        };
        close(){
            inputName.value = profileName.textContent; //points back to text already contained in the HTML tags to fill the values 
            inputOccuppation.value = profileOccuppation.textContent; 

super.close();
        };

    }

    export default PopupWithForm;
    //will create a function on what to do when we click on submit for the profile

    