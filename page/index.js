const mainInfoContainer = document.querySelector('.main__info');

function getWelcomeScreenElement() {
    const welcomeScreenTemplate = document.querySelector('#welcome-screen-template').content;
    const welcomeScreenElement = welcomeScreenTemplate.querySelector('.main__welcome-screen-container').cloneNode(true);
    const fillFormButton = welcomeScreenElement.querySelector('.main__button');
    fillFormButton.addEventListener('click', function (evt) {
        evt.preventDefault();
        addElementToMainInfo(getChooseCategoryElement());
    })
    return welcomeScreenElement;

}

function getChooseCategoryElement() {
    const chooseCategoryTemplate = document.querySelector('#choose-category').content;
    const chooseCategoryElement = chooseCategoryTemplate.querySelector('.form-container').cloneNode(true);
    return chooseCategoryElement;
}

function addElementToMainInfo(element) {
    mainInfoContainer.removeChild(mainInfoContainer.firstChild);
    mainInfoContainer.appendChild(element);
}

addElementToMainInfo(getWelcomeScreenElement());


const barForm = document.querySelector('#bar').cloneNode(true).content;
const main = document.querySelector('.main');

const barSubmit = document.querySelector('#bar-submit');

function addElementobshepitForm() {
    const obshepitForm = document.querySelector('#obshepitForm').cloneNode(true).content;
    const barForm = barSubmit.closest('.form-container');

    const selectCity = document.querySelector('#city').value;
    const placeName = document.querySelector('#place-name').value;
    const contactName = document.querySelector('#contact-name').value;
    const contactPhone = document.querySelector('#contact-phone').value;
    const desc = document.querySelector('#desc').value;

    if (selectCity.length == 0 || placeName.length == 0 || contactName.length == 5 || contactPhone.length == 11 || desc.length == 0) {
        return false;
    } else {
        main.prepend(obshepitForm);
        barForm.remove();
    }
}


function barFormSubmitHandler (evt) {
    evt.preventDefault();
}

barSubmit.addEventListener('click', addElementobshepitForm, barFormSubmitHandler);