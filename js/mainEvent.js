import { getSingleEvent } from "./modules/getSingleEvent.js";
import { showDateTable } from './modules/choiceuser.js';

const eventId = new URLSearchParams(window.location.search).get('id');
const title = document.querySelector('.headerPage-title');
const eventDetailsSection = document.getElementById('eventDetails');

displayEventDetails(eventId);

async function displayEventDetails(eventId) {
    try {

        const event = await getSingleEvent(eventId);

        title.textContent = event.name;

        showDateTable(event, eventDetailsSection);
    } catch (error) {
        console.error('Erreur lors de la récupération des détails de l\'événement', error);
    }
}

