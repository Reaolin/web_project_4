function showErrorMessage(input, form, {errorClass, inputErrorClass, ...rest}){
    const error =document.querySelector('#' + input.id + '-error');
    error.textContent = input.validationMessage;

    error.classList.add(errorClass);
    input.classList.add(inputErrorClass);

}

function hideErrorMessage(input, form, {errorClass, inputErrorClass, ...rest}){
    const error = document.querySelector('#' + input.id + '-error');
    error.textContent = input.validationMessage;

    error.classList.remove(errorClass);
    input.classList.remove(inputErrorClass);

}

function checkInputValidity(input, form, rest){
    if(input.validity.valid){
        hideErrorMessage(input, form, rest)
    }else{
        showErrorMessage(input, form, rest)
    }

}

function toggleButtonState(inputs, button,{inactiveButtonClass, ...rest}){
    const isValid = inputs.every((input) => input.validity.valid)

    if(isValid) {
        button.classList.remove(inactiveButtonClass);
        
    } else {
        button.classList.add(inactiveButtonClass);
    }

}


// enabling validation by calling enableValidation()
// pass all the on call

function enableValidation ({formSelector, inputSelector,submitButtonSelector ,...rest}) {
    const forms = [...document.querySelectorAll(formSelector)];

    forms.forEach((form) => {
        form.addEventListener('submit', ((evt) =>{
            evt.preventDefault()
        }))
        const inputs = [...form.querySelectorAll(inputSelector)];
        const button = form.querySelector(submitButtonSelector);

        inputs.forEach((input) =>{
            input.addEventListener('input', () =>{
                checkInputValidity(input, form, rest);
                toggleButtonState(inputs, button, rest);

            })
        })
    })
}



enableValidation({
    formSelector: ".modal__form",
    inputSelector: ".modal__input",
    submitButtonSelector: ".modal__button",
    inactiveButtonClass: "modal__button_disabled",
    inputErrorClass: "modal__input_type_error",
    errorClass: "modal__error_visible"
  });