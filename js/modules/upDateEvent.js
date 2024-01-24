function setupEditBtn() {
    console.log("Setting up edit fct");
    let btnEdit = document.querySelectorAll('.btnEdit');
    btnEdit.forEach(btn => {
        btn.addEventListener('click', editWorkflow(btn));
    });
}

async function editWorkflow(btn) {
    let eventId = await getTheID(btn);
    console.log("Setting up edit btn; id : ", eventId);
    let event = await getSingleEvent(eventId);
    let form = await editionForm(event);

    let btnSubmit = form.querySelector('editEventForm-btnSubmit');
    btnSubmit.addEventListener('click', editEvent(eventId))
}

function editionForm(event) {
    let card = document.querySelector('event-card');

    let editForm = document.createElement('form');
    editForm.classList.add("editEventForm");
    card.appendChild(editForm);

    let newTitle = document.createElement('input');
    newTitle.classList.add("editEventForm-title");
    newTitle.placeholder = event.name;
    editForm.appendChild(newTitle);

    let newAuthor = document.createElement('input');
    newAuthor.classList.add("editEventForm-author");
    newAuthor.placeholder = event.author;
    editForm.appendChild(newTitle);

    let newDesc = document.createElement('textarea');
    newDesc.classList.add("editEventForm-description");
    newDesc.placeholder = event.description;
    editForm.appendChild(newDesc);

    let submitEdit = document.createElement('button');
    submitEdit.classList.add("editEventForm-btnSubmit");
    submitEdit.appendChild(document.createTextNode('Editer'));
    editForm.appendChild(submitEdit);
}

async function editEvent(eventId) { // <=== a appeler au click su submit edit
    const name = document.querySelector('.editEventForm-title').value;
    const author = document.querySelector('.editEventForm-author').value;
    const description = document.querySelector('editEventForm-description').value;
    try {
        await fetch(`http://localhost:3000/api/events/${eventId}`, {
            method: 'POST',
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
