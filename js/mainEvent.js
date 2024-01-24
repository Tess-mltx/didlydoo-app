import { getSingleEvent } from "./modules/getSingleEvent.js";
import { generateDateTable } from './modules/choiceuser.js';

const eventId = new URLSearchParams(window.location.search).get('id');
const title = document.querySelector('.headerPage-title');

const event = await getSingleEvent(eventId);
title.textContent = event.name;

document.addEventListener('DOMContentLoaded', async function () {
    generateDateTable(event);

    // Ajouter un gestionnaire d'événements pour le bouton "Participer"
    const participateButton = document.getElementById('participateButton');
    participateButton.addEventListener('click', function () {
        // Logique pour participer à l'événement
        alert("Fonctionnalité de participation à l'événement à implémenter ici.");
    });
});