function solve() {
    let neededBudget = 0
    const fNameElement =  document.getElementById('fname')
    const lNameElement =  document.getElementById('lname')
    const emailElement =  document.getElementById('email')
    const birthElement =  document.getElementById('birth')
    const positionElement =  document.getElementById('position')
    const salaryElement =  document.getElementById('salary')
    const addWorkerBtn =  document.getElementById('add-worker')
    const tbodyElement = document.getElementById('tbody')
    const messageElement = document.getElementById('sum')

    addWorkerBtn.addEventListener("click", hireWorker)

    function hireWorker(e) {
        e.preventDefault()
        let firstname = fNameElement.value
        let lastname = lNameElement.value
        let email = emailElement.value
        let birth = birthElement.value
        let position = positionElement.value
        let salary = salaryElement.value


        if (firstname === '' ||
            lastname === '' ||
            email === '' ||
            birth === '' ||
            position === '' ||
            salary === '') {
            return
        }

        let workerObj = {1: firstname, 2: lastname, 3: email, 4: birth, 5: position, 6: salary}
        let trElement = document.createElement('tr')
        for (let i = 1; i <= 6; i++) {
            let tdElement = createTdElement(workerObj[i])
            trElement.appendChild(tdElement)
        }

        let fireBtn = createButton('fired', 'Fired', fireCurrentWorker)
        let editBtn = createButton('edit', 'Edit', editWorkerInfo)
        let tdButtonsElement = document.createElement('td')
        tdButtonsElement.appendChild(fireBtn)
        tdButtonsElement.appendChild(editBtn)
        trElement.appendChild(tdButtonsElement)
        tbodyElement.appendChild(trElement)

        neededBudget += Number(salary)

        messageElement.textContent = `${neededBudget.toFixed(2).toString()}`

        fNameElement.value = ''
        lNameElement.value = ''
        emailElement.value = ''
        birthElement.value = ''
        positionElement.value = ''
        salaryElement.value = ''
    }

    function fireCurrentWorker(fireEvent) {
        let currentRdElement = fireEvent.currentTarget.parentElement.parentElement
        let elementsArr = Array.from(currentRdElement.children)
        neededBudget -= Number(elementsArr[5].textContent)
        messageElement.textContent = `${neededBudget.toFixed(2).toString()}`
        currentRdElement.remove()
    }

    function editWorkerInfo(editEvent) {
        let currentRdElement = editEvent.currentTarget.parentElement.parentElement
        let elementsArr = Array.from(currentRdElement.children)

        fNameElement.value = elementsArr[0].textContent
        lNameElement.value = elementsArr[1].textContent
        emailElement.value = elementsArr[2].textContent
        birthElement.value = elementsArr[3].textContent
        positionElement.value = elementsArr[4].textContent
        salaryElement.value = elementsArr[5].textContent
        neededBudget -= Number(elementsArr[5].textContent)
        messageElement.textContent = `${neededBudget.toFixed(2).toString()}`
        currentRdElement.remove()
    }

    function createButton(elementClass, elementContent, eventFunction) {
        let buttonElement = document.createElement("button")
        buttonElement.classList.add(elementClass)
        buttonElement.textContent = elementContent
        buttonElement.addEventListener("click", eventFunction)
        return buttonElement
    }

    function createTdElement(elementTextContent) {
        let td = document.createElement('td')
        td.textContent = elementTextContent
        return td
    }
}
solve()