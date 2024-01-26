// // sur event.html, ajouter un bouton "ajouter des disponnibilité" ou similaire
// // import uniquement dans mainEvent.js
// // add un form pour les input date ?
// import { eventId } from "../mainEvent";
// const sectionAddDate = document.querySelector('addNewDatesEvent');
// const datesForm = document.getElementById('addDateForm'); // <=== là ou seront les input ???
// const btnSubmitDate = document.querySelector('#btnSubmitDate');

// let datesArray = [];

// // Changer de place l'eventListener ; je devrais en faire une function
// btnSubmitDate.addEventListener('click', e => {
//     e.preventDefault();

//     const datesInput = datesForm.querySelectorAll('input[type="date"]');

//     datesInput.forEach(input => {
//         let date = input.value;
//         datesArray.push(date);

//     });
//     console.log(datesArray);

//     addDateToEvent(eventId) // modifier l'argument apres au besoins;
//     location.reload(eventId);
// });


// async function addDateToEvent(eventId) {
//     const dates = datesArray;

//     await fetch(`http://localhost:3000/api/events/${eventId}/add_dates`, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({

//             dates: dates,

//         }),
//     })


// }
