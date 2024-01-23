const submitNewEvent = document.getElementById('submitEvent');
const nameEventInput = document.getElementById('nameEvent');
const authorInput = document.getElementById('author');
const datesInput = document.getElementById('dates');
const descriptionInput = document.getElementById('desc');

submitNewEvent.addEventListener('click', event => {
    event.preventDefault();

});

async function postNewEvent() {
    const name = nameEventInput.value;
    // const dates = ;
    const author = authorInput.value;
    const desciption = descriptionInput.textContent;


}

async function getEvent() {
    try {
        const response = await fetch(`http://localhost:3000/api/events`);
        const data = await response.json();
        console.log(data);
    }
    catch (error) {
        console.error('Erreur de récupération des données :', error);
    }
}
getEvent()