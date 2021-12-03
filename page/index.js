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
