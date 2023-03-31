window.addEventListener('load', solve);

function solve() {
    let firstNameElement = document.getElementById('first-name')
    let lastNameElement = document.getElementById('last-name')
    let dateInElement = document.getElementById('date-in')
    let dateOutElement = document.getElementById('date-out')
    let peopleCountElement = document.getElementById('people-count')
    let verificationElement = document.getElementById('verification')
    let reservationUlElement = Array.from(document.getElementsByClassName('info-list'))[0]
    let confirmUlElement = Array.from(document.getElementsByClassName('confirm-list'))[0]
    let nextButton = document.getElementById('next-btn')

    let first = ''
    let last = ''
    let dateOn = ''
    let dateOf = ''
    let peopleNum = ''

    nextButton.addEventListener("click", addToReservation)

    function createArticle(firstname, lastname, inDate, outDate, numberOfPeople) {
        let articleElement = document.createElement('article')
        let nameH = document.createElement('h3')
        let inP = document.createElement('p')
        let outP = document.createElement('p')
        let numberOfPeopleP = document.createElement('p')

        nameH.textContent = `Name: ${firstname} ${lastname}`
        articleElement.appendChild(nameH)

        inP.textContent = `From date: ${inDate}`
        articleElement.appendChild(inP)

        outP.textContent = `To date: ${outDate}`
        articleElement.appendChild(outP)

        numberOfPeopleP.textContent = `For ${numberOfPeople} people`
        articleElement.appendChild(numberOfPeopleP)

        return articleElement
    }

    function addToReservation(e) {
        //e.preventDefault()
        if (firstNameElement.value === '' ||
            lastNameElement.value === '' ||
            dateInElement.value === '' ||
            dateOutElement.value === '' ||
            peopleCountElement.value === '' ||
            new Date(dateInElement.value) >= new Date(dateOutElement.value)) {
            return
        }

        let liArticleElement = document.createElement('li')
        liArticleElement.classList.add('reservation-content')

        first = firstNameElement.value
        last = lastNameElement.value
        dateOn = dateInElement.value
        dateOf = dateOutElement.value
        peopleNum = peopleCountElement.value

        let currentArticleElement = createArticle(first, last, dateOn, dateOf, peopleNum)

        let editBtn = document.createElement('button')
        editBtn.addEventListener("click", onEdit)
        editBtn.classList.add('edit-btn')
        editBtn.textContent = 'Edit'
        let continueBtn = document.createElement('button')
        continueBtn.addEventListener("click", onContinue)
        continueBtn.classList.add('continue-btn')
        continueBtn.textContent = 'Continue'

        liArticleElement.appendChild(currentArticleElement)
        liArticleElement.appendChild(editBtn)
        liArticleElement.appendChild(continueBtn)

        reservationUlElement.appendChild(liArticleElement)

        nextButton.disabled = true

        firstNameElement.value = ''
        lastNameElement.value = ''
        dateInElement.value = ''
        dateOutElement.value = ''
        peopleCountElement.value = ''
    }

    function onEdit() {
        firstNameElement.value = first
        lastNameElement.value = last
        dateInElement.value = dateOn
        dateOutElement.value = dateOf
        peopleCountElement.value = peopleNum
        nextButton.disabled = false
        let elementToRemove = document.querySelector('.reservation-content')
        elementToRemove.remove()
    }
    function onContinue() {
        let liContinueElement = document.createElement('li')
        liContinueElement.classList.add('reservation-content')

        let continueArticleElement = createArticle(first, last, dateOn, dateOf, peopleNum)
        // let someArtArr = continueArticleElement.children

        let confirmBtn = document.createElement("button")
        confirmBtn.classList.add('confirm-btn')
        confirmBtn.textContent = 'Confirm'
        confirmBtn.addEventListener("click", positive)

        let canselBtn = document.createElement("button")
        canselBtn.classList.add('cancel-btn')
        canselBtn.textContent = 'Cansel'
        canselBtn.addEventListener("click", negative)

        liContinueElement.appendChild(continueArticleElement)
        liContinueElement.appendChild(confirmBtn)
        liContinueElement.appendChild(canselBtn)

        confirmUlElement.appendChild(liContinueElement)

        let removeRegLi = document.querySelector('.info-list li')
        removeRegLi.remove()
    }

    function positive() {
        nextButton.disabled = false
        verificationElement.classList.add('reservation-confirmed')
        verificationElement.textContent = 'Confirmed.'

        let removeContinueLi = document.querySelector('.confirm-list li')
        removeContinueLi.remove()
    }

    function negative() {
        nextButton.disabled = false
        verificationElement.classList.add('reservation-cancelled')
        verificationElement.textContent = 'Cancelled.'

        let removeContinueLi = document.querySelector('.confirm-list li')
        removeContinueLi.remove()
    }
}
