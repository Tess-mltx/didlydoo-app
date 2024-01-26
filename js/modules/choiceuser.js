export function showDateTable(event, eventDetailsSection) {
    const dateTable = generateDateTable(event);
    eventDetailsSection.appendChild(dateTable);
}

export function generateDateTable(event) {
    // Préparer les données pour construire le tableau HTML.
    const [dateCompte, dataArray] = prepareDonnees(event)

    console.log(JSON.stringify(dateCompte, null, 2))

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

        if (indexLine > 0) {
            const btEditElm = document.createElement('button')
            btEditElm.innerHTML = 'Edit'
            btEditElm.addEventListener('click', () => {
                editParticipation(editRowElm, line)
            })

            rowElm.append(dansUnTd(btEditElm))
        }

        dateTable.append(rowElm)
    })

    // Ajoute la ligne avec les comptes.
    const max = Math.max(...Object.values(dateCompte))

    const compteRowElm = document.createElement('tr')
    compteRowElm.append(document.createElement('td'))

    for (let i = 1; i < dataArray[0].length; i += 1) {
        const tdCompteElm = document.createElement('td')
        tdCompteElm.innerHTML = dateCompte[dataArray[0][i]]

        if (dateCompte[dataArray[0][i]] === max) {
            tdCompteElm.classList.add('best-date')
        }

        compteRowElm.append(tdCompteElm)
    }

    dateTable.append(compteRowElm)

    // Ajout de la ligne pour ajouter quelqu'un.
    const editRowElm = document.createElement('tr')

    const inputElm = document.createElement('input')
    editRowElm.append(dansUnTd(inputElm))

    for (let i = 1; i < dataArray[0].length; i += 1) {
        const checkboxElm = document.createElement('input')
        checkboxElm.type = 'checkbox'
        checkboxElm.dataset.date = dataArray[0][i]

        editRowElm.append(dansUnTd(checkboxElm))
    }

    const btSauverElm = document.createElement('button')
    btSauverElm.innerHTML = 'Sauver'
    btSauverElm.addEventListener('click', (e) => { sauverParticipation(event.id, e) })

    editRowElm.append(dansUnTd(btSauverElm))

    dateTable.append(editRowElm)

    return dateTable
}

function dansUnTd(elm) {
    const td = document.createElement('td')
    td.append(elm)
    return td
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

    postAttend(id, obj, allInputs[0].disabled).then(() => {
        location.reload()
    })
}

function editParticipation(editRowElm, line) {
    const allInputs = editRowElm.querySelectorAll('input')

    for (let i = 0; i < allInputs.length; i += 1) {
        const elm = allInputs[i]

        switch (line[i]) {
            case true:
                elm.checked = true
                break

            case false:
            case null:
                elm.checked = false
                break

            default:
                elm.value = line[i]
        }
    }

    allInputs[0].disabled = true
}

async function postAttend(id, donnees, isUpdate) {
    try {
        const reponse = await fetch(`http://localhost:3000/api/events/${id}/attend`, {
            method: isUpdate ? "PATCH" : "POST",
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
    const dateCompte = {}

    event.dates.forEach((d) => {
        dateCompte[d.date] = 0
        dataArray[0].push(d.date)

        d.attendees.forEach((a) => {
            if (dataObj[a.name] === undefined) {
                dataObj[a.name] = {}
            }

            dataObj[a.name][d.date] = a.available

            if (a.available) {
                dateCompte[d.date] += 1
            }
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

    return [dateCompte, dataArray]
}
