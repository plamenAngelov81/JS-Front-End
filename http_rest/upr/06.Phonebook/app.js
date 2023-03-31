function attachEvents() {
    const btnLoad = document.getElementById('btnLoad')
    const ul = document.getElementById('phonebook')
    const personInput = document.getElementById('person')
    const phoneInput = document.getElementById('phone')
    const btnCreate = document.getElementById('btnCreate')

    btnLoad.addEventListener('click', loadContacts)
    btnCreate.addEventListener('click', createContact)
    let base_url = 'http://localhost:3030/jsonstore/phonebook/'

    function loadContacts() {
        ul.innerHTML = ''
        fetch(base_url)
            .then((res) => res.json())
            .then((contacts) => {
                let users = Object.values(contacts)
                for (const {person, phone, _id} of users) {
                    let li = document.createElement('li')
                    li.textContent = `${person}: ${phone}`
                    let deleteBtn = document.createElement('button')
                    deleteBtn.addEventListener('click', deleteContact)
                    deleteBtn.textContent = 'Delete'
                    deleteBtn.id = _id
                    li.appendChild(deleteBtn)
                    ul.appendChild(li)
                }
            })
    }

    function createContact() {
        let person = personInput.value
        let phone = phoneInput.value
        //console.log(person)
        //console.log(phone)
        let httpHeaders = {
            method: 'POST',
            body: JSON.stringify({person, phone})
        }

        fetch(base_url, httpHeaders)
            .then((res) => res.json())
            .then(() => {
                loadContacts()
                personInput.value = ''
                phoneInput.value = ''
            })
            .catch((err) => {
                console.error(err)
            })
    }

    function deleteContact(deleteEvent) {
        const currentId = deleteEvent.currentTarget.id
        let httpHeader = {method: "DELETE"}
        fetch(`${base_url}${currentId}`, httpHeader)
            .then((res) => res.json())
            .then(loadContacts)
            .catch((err) => {console.error(err)})
    }
}

attachEvents();