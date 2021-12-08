const mainInfoContainer = document.querySelector('.main__info');
let keyCode;


// Get elements from templates

function getWelcomeScreenElement() {
    const welcomeScreenTemplate = document.querySelector('#welcome-screen-template').content;
    const welcomeScreenElement = welcomeScreenTemplate.querySelector('.main__welcome-screen-container').cloneNode(true);
    const fillFormButton = welcomeScreenElement.querySelector('.main__button');
    fillFormButton.addEventListener('click', function (evt) {
        evt.preventDefault();
        addElementToMainInfo(getChooseCategoryElement());
    });
    return welcomeScreenElement;
}

function getChooseCategoryElement() {
    return getFormById('#choose-category', navigateFromChooseCategory, getWelcomeScreenElement);
}

function navigateFromChooseCategory() {
    const formElement = document.querySelector('.form-container__form');
    const checkedValue = getCheckedRadioButtonId(formElement, '.form-container__radio');
    switch (checkedValue) {
        case ('food'):
            return getCafeFormStep2();
        case ('education'):
            return getEventFormStep2();
        case ('party'):
            return getPartyFormStep2();
        case ('other'):
            return getOtherFormStep2();
    }
}

function getCafeFormStep2() {
    return getFormById('#cafe-form-step-2', getCafeFormStep3, getChooseCategoryElement);
}

function getCafeFormStep3() {
    return getFormById('#cafe-form-step-3', getWelcomeScreenElement, getCafeFormStep2);
}

function getEventFormStep2() {
    return getFormById('#event-form-step-2', getEventFormStep3, getChooseCategoryElement);
}

function getEventFormStep3() {
    return getFormById('#event-form-step-3', getWelcomeScreenElement, getEventFormStep2);
}

function getPartyFormStep2() {
    return getFormById('#party-form-step-2', getPartyFormStep3, getChooseCategoryElement);
}

function getPartyFormStep3() {
    return getFormById('#party-form-step-3', getWelcomeScreenElement, getPartyFormStep2);
}

function getOtherFormStep2() {
    return getFormById('#other-form-step-2', getOtherFormStep3, getChooseCategoryElement);
}

function getOtherFormStep3() {
    return getFormById('#other-form-step-3', getWelcomeScreenElement, getOtherFormStep2);
}

// Utils

function addElementToMainInfo(element) {
    mainInfoContainer.removeChild(mainInfoContainer.firstChild);
    mainInfoContainer.appendChild(element);
}

function getFormById(formId, onSubmitElement, onResetElement) {
    const template = document.querySelector(formId).content;
    const templateElement = template.querySelector('.form-container').cloneNode(true);
    const formElement = templateElement.querySelector('.form-container__form');
    formElement.addEventListener('submit', function (evt) {
        evt.preventDefault();
        addElementToMainInfo(onSubmitElement());
    });
    formElement.addEventListener('reset', function (evt) {
        evt.preventDefault();
        addElementToMainInfo(onResetElement());
    });

    const phoneInput = formElement.querySelector('.form-container__text-input[type="tel"]');
    if (phoneInput) {
        phoneInput.addEventListener("input", mask, false);
        phoneInput.addEventListener("focus", mask, false);
        phoneInput.addEventListener("blur", mask, false);
        phoneInput.addEventListener("keydown", mask, false);
    }
    return templateElement;
}

function getCheckedRadioButtonId(form, radioButtonClass) {
    let returnId;
    let radioButtons = form.querySelectorAll(radioButtonClass);

    for (let index = 0; index < radioButtons.length; index++) {
        if (radioButtons[index].checked) {
            returnId = radioButtons[index].id;
            break;
        }
    }
    return returnId;
}

function mask(event) {
    event.keyCode && (keyCode = event.keyCode);
    let pos = this.selectionStart;
    if (pos < 3) event.preventDefault();
    let matrix = "+7 (___) ___ ____",
        i = 0,
        def = matrix.replace(/\D/g, ""),
        val = this.value.replace(/\D/g, ""),
        new_value = matrix.replace(/[_\d]/g, function (a) {
            return i < val.length ? val.charAt(i++) || def.charAt(i) : a
        });
    i = new_value.indexOf("_");
    if (i != -1) {
        i < 5 && (i = 3);
        new_value = new_value.slice(0, i)
    }
    let reg = matrix.substr(0, this.value.length).replace(/_+/g,
        function (a) {
            return "\\d{1," + a.length + "}"
        }).replace(/[+()]/g, "\\$&");
    reg = new RegExp("^" + reg + "$");
    if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
    if (event.type == "blur" && this.value.length < 5) this.value = ""
}


addElementToMainInfo(getWelcomeScreenElement());