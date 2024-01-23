const submitNewEvent = document.getElementById('submitEvent');
const nameEventInput = document.getElementById('nameEvent');
const authorInput = document.getElementById('author');
const datesDiv = document.getElementById('datesInputs');
const datesInput = datesDiv.querySelectorAll('input[type="date"]');
const descriptionInput = document.getElementById('desc');


let datesArray = [];

// submitNewEvent.addEventListener('click', () => {
//     datesInput.forEach(input => {
//         let date = input.value;
//         datesArray.push(date);
//         postNewEvent()
//       });
//     postNewEvent();

// });


async function postNewEvent() {
    const name = nameEventInput.value;
    const dates = datesArray;
    const author = authorInput.value;
    const description = descriptionInput.textContent;

    await fetch('http://localhost:3000/api/events/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: name,
            dates: dates,
            author: author,
            description: description,
        }),
    })
    getEvent();


}

export async function getEvent() {
    try {
        const response = await fetch(`http://localhost:3000/api/events`);
        const data = await response.json();
        console.log(data);
        return data;
    }
    catch (error) {
        console.error('Erreur de récupération des données :', error);
    }
}
