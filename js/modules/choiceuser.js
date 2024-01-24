export function generateDateTable(event) {
    const dateTable = document.createElement('table');
    const headerRow = document.createElement('tr');

    const emptyHeaderCell = document.createElement('th');
    headerRow.appendChild(emptyHeaderCell);

    event.dates.forEach(date => {
        const headerCell = document.createElement('th');
        headerCell.textContent = formatDate(date);
        headerRow.appendChild(headerCell);
    });

    dateTable.appendChild(headerRow);

    event.attendees.forEach(attendee => {
        const row = document.createElement('tr');

        const nameCell = document.createElement('td');
        nameCell.textContent = attendee.name;
        row.appendChild(nameCell);

        event.dates.forEach(date => {
            const checkboxCell = document.createElement('td');
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.name = `${attendee.name}_${date}`;
            checkboxCell.appendChild(checkbox);
            row.appendChild(checkboxCell);
        });

        dateTable.appendChild(row);
    });

    const eventDetailsSection = document.getElementById('eventDetails');
    eventDetailsSection.appendChild(dateTable);

    const participateButton = document.getElementById('participateButton');
    participateButton.addEventListener('click', function () {
        dateTable.style.display = 'table'; 
    });
}

  