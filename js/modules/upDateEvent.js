import { getTheID } from "../utils/getTheID";
import { getSingleEvent } from "./getSingleEvent";

// const btnAllEvent = document.getElementById('seeEvent');
// btnAllEvent.addEventListener('click', setupEditBtn());

export function setupEditBtn() {
    console.log("Setting up edit fct");
    let btnEdit = document.querySelectorAll('.btnEdit');
    btnEdit.forEach(btn => {
        btn.addEventListener('click', async function () {
            let eventId = await getTheID(btn);
            editWorkflow(eventId);
        })
    });
}

async function editWorkflow(eventId) {
    console.log("Setting up edit btn; id : ", eventId);
    let event = await getSingleEvent(eventId);
    await editionForm(event);
    let btnSubmit = document.querySelector('.editEventForm-btnSubmit');
    btnSubmit.addEventListener('click', async function () {
        editEvent(eventId)
        // location.reload();
    })
}

async function editionForm(event) {
    let card = document.querySelector(`#card-${event.id}`);

    let editForm = document.createElement('form');
    editForm.classList.add("editEventForm");
    card.appendChild(editForm);

    let newTitle = document.createElement('input');
    newTitle.classList.add("editEventForm-title");
    newTitle.value = event.name;
    newTitle.setAttribute('required', true);
    editForm.appendChild(newTitle);

    let newAuthor = document.createElement('input');
    newAuthor.classList.add("editEventForm-author");
    newAuthor.setAttribute('required', true)
    newAuthor.value = event.author;
    editForm.appendChild(newAuthor);

    let newDesc = document.createElement('textarea');
    newDesc.classList.add("editEventForm-description");
    newDesc.setAttribute('required', true)
    newDesc.setAttribute('maxlenght', '256')
    newDesc.value = event.description;
    editForm.appendChild(newDesc);

    let submitEdit = document.createElement('button');
    submitEdit.setAttribute("type", "button")
    submitEdit.classList.add("editEventForm-btnSubmit");
    submitEdit.appendChild(document.createTextNode('Editer'));
    editForm.appendChild(submitEdit);
}

async function editEvent(eventId) { // <=== a appeler au click su submit edit
    const name = document.querySelector('.editEventForm-title').value;
    const author = document.querySelector('.editEventForm-author').value;
    const description = document.querySelector('.editEventForm-description').value;
    try {
        await fetch(`http://localhost:3000/api/events/${eventId}/`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: name,
                author: author,
                description: description,
            })
        })
    } catch (error) {

    }
}