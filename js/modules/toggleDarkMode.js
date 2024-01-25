import { randomColorLight } from "../utils/randomColor";

const checkbox = document.getElementById('toggleDarkMode');


let interval;

function changeColor(cards) {

    if (!interval) {
        interval = setInterval(partyOn, 1000, cards);
    }
}

function partyOn(cards) {
    cards.forEach(card => {
        let color = randomColorLight();
        card.style.backgroundColor = color;
        card.style.color = 'hsl(230, 40%, 10%)';
    });
}

checkbox.addEventListener('change', function () {
    let htmlTag = document.documentElement;
    let bodyTag = document.querySelector('.bodyPage')
    let main = document.querySelector('.mainPage');
    let cards = document.querySelectorAll('.event-card');

    switch (this.checked) {
        case true:
            htmlTag.classList.add('partyMode');
            bodyTag.classList.add('partyMode', 'bodyPage');
            changeColor(cards)
            break;
        case false:
            htmlTag.classList.remove('partyMode');
            bodyTag.classList.remove('partyMode');
            stopPartyMode()
            break;
    }
});

function stopPartyMode() {
    clearInterval(interval);
    interval = null;
}
