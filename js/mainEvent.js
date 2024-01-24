import { getSingleEvent } from "./modules/getSingleEvent.js";
import { generateDateTable} from './modules/choiceuser.js';

const eventId = new URLSearchParams(window.location.search).get('id');
const title = document.querySelector('.headerPage-title');

const event = await getSingleEvent(eventId);
title.textContent = event.name;


document.addEventListener('DOMContentLoaded', async function () {
    const eventId = new URLSearchParams(window.location.search).get('id');
    const event = await getSingleEvent(eventId);
  

    generateDateTable(event);
  });