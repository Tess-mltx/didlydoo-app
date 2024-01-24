import { getEvent, getSingleEvent } from './modules/createNewEvent.js';

document.addEventListener('DOMContentLoaded', async function () {
    const seeEventButton = document.getElementById('seeEvent');
    const mainContainer = document.querySelector('main');

    seeEventButton.addEventListener('click', async function () {
        mainContainer.innerHTML = '';

        try {
            const eventIds = await getEvent();
            const detailedEventsPromises = eventIds.map(eventId => getSingleEvent(eventId));
            const detailedEvents = await Promise.all(detailedEventsPromises);

            const zippedEvents = zip(eventIds, detailedEvents);

            zippedEvents.forEach(([eventId, detailedEvent]) => {
                displayEvent({ id: eventId, ...detailedEvent });
            });
        } catch (error) {
            console.error('Erreur lors de la récupération des événements', error);
        }
    });

    // async function fetchEvent(event) {
    //     try {
    //         const response = await fetch(`/api/events/${event.id}`);
    //         const detailedEvent = await response.json();
    //         return detailedEvent;
    //     } catch (error) {
    //         console.error(`Erreur lors de la récupération de l'événement ${event.id}`, error);
    //         return null;
    //     }
    // }

    function displayEvent(event) {
        if (!event) {
            return "pas d'evenement"; 
        }

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

        eventCard.appendChild(eventName);
        eventCard.appendChild(eventDescription);
        eventCard.appendChild(eventAuthor);
        eventCard.appendChild(participateButton);

        mainContainer.appendChild(eventCard);
    }
});
