const mainInfoContainer = document.querySelector('.main__info');

function getWelcomeScreenElement() {
    const welcomeScreenTemplate = document.querySelector('#welcome-screen-template').content;
    const welcomeScreenElement = welcomeScreenTemplate.querySelector('.main__welcome-screen-container').cloneNode(true);
    return welcomeScreenElement;
}

function addElementToMainInfo(element) {
    mainInfoContainer.removeChild(mainInfoContainer.firstChild);
    mainInfoContainer.appendChild(element);
}

addElementToMainInfo(getWelcomeScreenElement());
