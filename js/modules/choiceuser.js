export function showDateTable(event, eventDetailsSection) {
    const dateTable = generateDateTable(event);
    eventDetailsSection.appendChild(dateTable);
}

export function generateDateTable(event) {
    // Préparer les données pour construire le tableau HTML.
    const dataArray = prepareDonnees(event)

    // Contruit le tableau HTML.
    const dateTable = document.createElement('table');
    dateTable.classList.add('date-table');

    dataArray.forEach((line, indexLine) => {
        const rowElm = document.createElement('tr');

        line.forEach((col) => {
            let cellElm = document.createElement((indexLine === 0) ? 'th' : 'td');

            switch (col) {
                case true:
                    cellElm.innerHTML = '<i class="fa-solid fa-check" style="color:hsl(140, 100%, 37%)"></i>'
                    break

                case false:
                case null:
                    cellElm.innerHTML = '<i class="fa-solid fa-xmark" style="color:hsl(0, 100%, 42%)"></i>'
                    break

                default:
                    cellElm.innerHTML = col
            }

            rowElm.append(cellElm)
        })

        dateTable.append(rowElm)
    })

    // Ajout de la ligne pour ajouter quelqu'un.
    const editRowElm = document.createElement('tr')

    const inputElm = document.createElement('input')
    editRowElm.append(inputElm)

    for (let i = 1; i < dataArray[0].length; i += 1) {
        const tdElm = document.createElement('td')
        const checkboxElm = document.createElement('input')
        checkboxElm.type = 'checkbox'
        checkboxElm.dataset.date = dataArray[0][i]

        tdElm.append(checkboxElm)
        editRowElm.append(tdElm)
    }

    const tdBtSauverElm = document.createElement('td')
    const btSauverElm = document.createElement('button')
    btSauverElm.innerHTML = 'Sauver'
    btSauverElm.addEventListener('click', (e) => { sauverParticipation(event.id, e) })

    tdBtSauverElm.append(btSauverElm)
    editRowElm.append(tdBtSauverElm)

    dateTable.append(editRowElm)

    return dateTable
}

function sauverParticipation(id, e) {
    const buttonElm = e.target
    buttonElm.disabled = true

    const allInputs = buttonElm.closest('tr').querySelectorAll('input')

    const obj = {
        name: allInputs[0].value,
        dates: []
    }

    for (let i = 1; i < allInputs.length; i += 1) {
        obj.dates.push({
            date: allInputs[i].dataset.date,
            available: allInputs[i].checked
        })
    }

    console.log(JSON.stringify(obj, null, 2))

    postAttend(id, obj).then(() => {
        location.reload()
    })
}


async function postAttend(id, donnees) {
    try {
        const reponse = await fetch(`http://localhost:3000/api/events/${id}/attend`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(donnees),
        });

        const resultat = await reponse.json();
        console.log("Réussite :", resultat);
    } catch (erreur) {
        console.error("Erreur :", erreur);
    }
}


function prepareDonnees(event) {
    const dataObj = {}
    const dataArray = [[]]

    event.dates.forEach((d) => {
        dataArray[0].push(d.date)

        d.attendees.forEach((a) => {
            if (dataObj[a.name] === undefined) {
                dataObj[a.name] = {}
            }

            dataObj[a.name][d.date] = a.available
        })
    })

    for (const name of Object.keys(dataObj)) {
        const newLine = [name]

        for (const date of dataArray[0]) {
            newLine.push(dataObj[name][date])
        }

        dataArray.push(newLine)
    }

    dataArray[0] = ['', ...dataArray[0]]

    console.log(JSON.stringify(dataObj, null, 2))
    console.log(JSON.stringify(dataArray, null, 2))

    return dataArray
}
