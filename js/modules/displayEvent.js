import { getEvent } from './createNewEvent.js';

document.addEventListener('DOMContentLoaded', async function () {
    const seeEventButton = document.getElementById('seeEvent');
    const mainContainer = document.querySelector('main');

    seeEventButton.addEventListener('click', async function () {
        mainContainer.innerHTML = '';

        try {
            const events = await getEvent();

            events.forEach(event => {
                displayEvent(event);
            });
        } catch (error) {
            console.error('Erreur lors de la récupération des événements', error);
        }
    });

    function displayEvent(event) {
        const eventCard = document.createElement('div');
        eventCard.classList.add('event-card');

        const eventName = document.createElement('h3');
        eventName.textContent = event.name;

        const eventDescription = document.createElement('p');
        eventDescription.textContent = event.description;

        const eventAuthor = document.createElement('p');
        eventAuthor.textContent = `Auteur: ${event.author}`;

        const participateButton = document.createElement('button');
        participateButton.textContent = 'Participer';
        participateButton.addEventListener('click', function () {
            //logique pour participer à l'événement
        });

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Supprimer';
        deleteButton.addEventListener('click', function () {
            //logique pour supprimer l'événement
        });

        const editButton = document.createElement('button');
        editButton.textContent = 'Éditer';
        editButton.addEventListener('click', function () {
            //logique pour éditer l'événement
        });

        eventCard.appendChild(deleteButton);
        eventCard.appendChild(editButton);
        eventCard.appendChild(eventName);
        eventCard.appendChild(eventDescription);
        eventCard.appendChild(eventAuthor);
        eventCard.appendChild(participateButton);

        mainContainer.appendChild(eventCard);
    }
});
