import { getSingleEvent } from "./modules/getSingleEvent.js";
import { showDateTable } from './modules/choiceuser.js';
// import './modules/addPossibleDate.js';
// import './utils/getTheID.js';
// import './modules/getSingleEvent.js';

export const eventId = new URLSearchParams(window.location.search).get('id');
const title = document.querySelector('.headerPage-title');
const desc = document.querySelector('.headerPage-desc');
const eventDetailsSection = document.getElementById('eventDetails');

displayEventDetails(eventId);

async function displayEventDetails(eventId) {
    try {
        const event = await getSingleEvent(eventId);

        title.textContent = event.name;
        desc.textContent = event.description;

        showDateTable(event, eventDetailsSection);
    } catch (error) {
        console.error('Erreur lors de la récupération des détails de l\'événement', error);
    }
}

