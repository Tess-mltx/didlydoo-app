import { getTheID } from "../utils/getTheID";

const btnAllEvent = document.querySelector('#seeEvent');
btnAllEvent.addEventListener('click',  async function () {setupDeleteBtn()})

function setupDeleteBtn() {
    console.log("Setting up delete fct");
    let btnDelete = document.querySelectorAll('.btnDelete'); // <=== a ajouter au displayCardEvent

    btnDelete.forEach(btn => {
        btn.addEventListener('click', () => {

            let id = getTheID(btn);
            console.log("Setting up delete btn; id : ", id);
            deleteEvent(id);

        })
    });
};



async function deleteEvent(eventId) {
    try {
        await fetch(`http://localhost:3000/api/events/${eventId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            }
        })
    } catch (error) {

    }
};