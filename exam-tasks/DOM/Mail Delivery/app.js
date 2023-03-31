function solve () {
    const recipientInputElement = document.getElementById('recipientName')
    const titleInputElement = document.getElementById('title')
    const messageInputElement = document.getElementById('message')
    const addBtn = document.getElementById('add')
    const resetBtn = document.getElementById('reset')
    const listUlElement = document.getElementById('list')
    const sendListUl = Array.from(document.getElementsByClassName('sent-list'))[0]
    const deleteListUl = Array.from(document.getElementsByClassName('delete-list'))[0]

    addBtn.addEventListener('click', addToList)
    resetBtn.addEventListener('click', resetFields)

    function addToList(e) {
        e.preventDefault()
        let recipient = recipientInputElement.value
        let title = titleInputElement.value
        let message = messageInputElement.value

        if (recipient === '' || title === '' || message === '') {return}

        let liElement = document.createElement('li')

        let titleElement = document.createElement('h4')
        titleElement.textContent = `Title: ${title}`
        liElement.appendChild(titleElement)

        let recipientEl = document.createElement('h4')
        recipientEl.textContent = `Recipient Name: ${recipient}`
        liElement.appendChild(recipientEl)

        let messageSpanElement = document.createElement('span')
        messageSpanElement.textContent = message
        liElement.appendChild(messageSpanElement)

        let sendButtonElement = createButton('submit', 'send', 'Send', sendMailEvent)
        let deleteButtonElement = createButton('submit', 'delete', 'Delete', deleteMailEvent)

        let divMailElement = document.createElement('div')
        divMailElement.id = 'list-action'

        divMailElement.appendChild(sendButtonElement)
        divMailElement.appendChild(deleteButtonElement)

        liElement.appendChild(divMailElement)
        listUlElement.appendChild(liElement)

        recipientInputElement.value = ''
        titleInputElement.value = ''
        messageInputElement.value = ''
    }

    function sendMailEvent(mailSend) {
        let currentLiElement = mailSend.currentTarget.parentElement.parentElement
        let liElements = Array.from(currentLiElement.children)

        let newLiElement = document.createElement('li')

        let spanNameElement = document.createElement("span")
        spanNameElement.textContent = `To: ${liElements[1].textContent.split(': ')[1]}`
        newLiElement.appendChild(spanNameElement)

        let titleSpanElement = document.createElement('span')
        titleSpanElement.textContent = `Title: ${liElements[0].textContent.split(': ')[1]}`
        newLiElement.appendChild(titleSpanElement)

        let deleteButton =  document.createElement('button')
        deleteButton.type = 'submit'
        deleteButton.classList.add('delete')
        deleteButton.textContent = 'Delete'
        deleteButton.addEventListener("click", deleteMailEvent)
        let divBtnElement = document.createElement("div")
        divBtnElement.classList.add('btn')
        divBtnElement.appendChild(deleteButton)
        newLiElement.appendChild(divBtnElement)
        sendListUl.appendChild(newLiElement)

        currentLiElement.remove()
    }

    function deleteMailEvent(eventDelete) {
        let deleteLiElement = eventDelete.currentTarget.parentElement.parentElement
        let titleTextContent = ''
        let nameTextContent = ''
        if (deleteLiElement.parentElement === listUlElement) {
            let currentListItems = Array.from(deleteLiElement.children)
            titleTextContent = `Title: ${currentListItems[0].textContent.split(': ')[1]}`
            nameTextContent = `To: ${currentListItems[1].textContent.split(': ')[1]}`
        } else {
            let currentListItems = Array.from(deleteLiElement.children)
            titleTextContent = `Title: ${currentListItems[1].textContent.split(': ')[1]}`
            nameTextContent = `To: ${currentListItems[0].textContent.split(': ')[1]}`
        }

        let newListElement = document.createElement('li')
        let nameElement = document.createElement('span')
        nameElement.textContent = nameTextContent
        newListElement.appendChild(nameElement)
        let titleElement = document.createElement('span')
        titleElement.textContent = titleTextContent
        newListElement.appendChild(titleElement)
        deleteListUl.appendChild(newListElement)

        deleteLiElement.remove()
    }

    function resetFields(e) {
        e.preventDefault()
        recipientInputElement.value = ''
        titleInputElement.value = ''
        messageInputElement.value = ''
    }

    function createButton(buttonType, buttonId, context, eventFunction) {
        let currentBtn = document.createElement('button')
        currentBtn.type = buttonType
        currentBtn.id = buttonId
        currentBtn.textContent = context
        currentBtn.addEventListener("click", eventFunction)
        return currentBtn
    }
}

solve()
