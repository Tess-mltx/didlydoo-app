const addDateBtn = document.getElementById('addDateBtn');

addDateBtn.addEventListener('click', addNewDate );
    
function addNewDate() {
    const datesDiv = document.getElementById('datesInputs');
    const dateInput = document.createElement('input');
    dateInput.classList.add('form_date')
    dateInput.setAttribute('type', 'date');
    datesDiv.append(dateInput);
}