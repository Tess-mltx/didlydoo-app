import { getEvent } from './createNewEvent.js';
import { setupEditBtn } from './upDateEvent.js';
import { setupDeleteBtn } from './deleteSingleEvent.js';

const mainContainer = document.querySelector('main');

async function afficherTousLesEvennements() {
    mainContainer.innerHTML = '';

    try {
        const events = await getEvent();

        events.forEach(event => {
            displayEvent(event);
        });

        setupEditBtn();
        setupDeleteBtn();
    } catch (error) {
        console.error('Erreur lors de la récupération des événements', error);
    }
}

afficherTousLesEvennements()

export function displayEvent(event) {
    const eventCard = document.createElement('div');
    eventCard.classList.add('event-card');
    eventCard.id = `card-${event.id}`;

    const eventName = document.createElement('h3');
    eventName.textContent = event.name;

    const eventDescription = document.createElement('p');
    eventDescription.textContent = event.description;

    const eventAuthor = document.createElement('p');
    eventAuthor.textContent = `Auteur: ${event.author}`;

    const participateButton = document.createElement('button');
    participateButton.textContent = 'Participer';
    participateButton.classList.add('participate-button');
    participateButton.addEventListener('click', () => {
        location.href = `/event.html?id=${event.id}`
    })

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('btnDelete')
    deleteButton.textContent = 'Supprimer';

    const editButton = document.createElement('button');
    editButton.classList.add('btnEdit')
    editButton.textContent = 'Éditer';

    eventCard.appendChild(deleteButton);
    eventCard.appendChild(editButton);
    eventCard.appendChild(eventName);
    eventCard.appendChild(eventDescription);
    eventCard.appendChild(eventAuthor);
    eventCard.appendChild(participateButton);

    mainContainer.appendChild(eventCard);





    // const dates = document.createElement('div');

    // event.dates.forEach((d) => {
    //     const div = document.createElement('div');
    //     const input = document.createElement('input');
    //     const button = document.createElement('button');

    //     input.type = 'date'
    //     input.value = d.date

    //     button.innerHTML = 'X'
    //     button.addEventListener('click', () => {
    //         button.parentElement.remove()

    //         // Pour sauver
    //         const toutesLesDates = Array.from(dates.querySelectorAll('input')).map((i) => i.value)
    //         console.log(toutesLesDates)
    //     })

    //     div.append(input)
    //     div.append(button)

    //     dates.append(div)
    // })

    // eventCard.append(dates)
};

