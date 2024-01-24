function setupEditBtn() {
    console.log("Setting up edit fct");
    let btnEdit = document.querySelectorAll('.btnEdit');
    btnEdit.forEach(btn => {
        btn.addEventListener('click', () => {
            let id = getTheID(btn);
            console.log("Setting up edit btn; id : ", id);
            // display in form

        });
    });
}

function displayInForm() {
    
}

async function editEvent(eventId) { // <=== a appeler au click su submit edit
    let event = await fetch(`http://localhost:3000/api/events/${eventId}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        }
    })

}