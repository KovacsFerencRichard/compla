/*
* File: app.js
* Author: Kovács F. Richárd
* Copyright: 2024, Kovács F. Richárd
* Group: Szoft Szoft-2-N
* Date: 2024-05-08
* Github: https://github.com/janos12345/
* Licenc: GNU GPL
*/

const doc = {
    idInput: document.querySelector('#id'),
    descriptionInput: document.querySelector('#description'),
    complainantInput: document.querySelector('#complainant '),
    typeInput: document.querySelector('#type')
}


doc.multiButton.addEventListener('click', () => {
    console.log('Mentés...')
    setEmployeeState()
    addEmployee()
})