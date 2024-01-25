// sur event.html, ajouter un bouton "ajouter des disponnibilité" ou similaire
// import uniquement dans mainEvent.js
// add un form pour les input date ?

// const datesForm = document.getElementById('dateForm'); // <=== là ou seront les input ???
// const btnSubmitDate = document.querySelector('#btnSubmitDate');
let datesArray = ['2024-02-14', '2024-02-15'];

// Changer de place l'eventListener ; je devrais en faire une function

// btnSubmitDate.addEventListener('click', () => {

//     const datesInput = datesForm.querySelectorAll('input[type="date"]');

//     datesInput.forEach(input => {
//         let date = input.value;
//         datesArray.push(date);

//     });
//     console.log(datesArray);

//     addDateToEvent(eventId) // modifier l'argument apres au besoins;

// });


async function addDateToEvent(eventId) {
    const dates = datesArray;

    await fetch(`http://localhost:3000/api/events/${eventId}/add_dates`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({

            dates: dates,

        }),
    })


}
// addDateToEvent('8df5c688c8ca');