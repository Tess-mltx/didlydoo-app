import { getSingleEvent } from "./modules/getSingleEvent.js";

const eventId = new URLSearchParams(window.location.search).get('id');
const title = document.querySelector('.headerPage-title');

const event = await getSingleEvent(eventId);
title.textContent = event.name;