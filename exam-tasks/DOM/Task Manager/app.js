function solve() {
    const taskInput = document.getElementById('task')
    const descriptionInput = document.getElementById('description')
    const dateInput = document.getElementById('date')
    const addBtn = document.getElementById('add')
    const wrapperDiv = document.getElementsByClassName('wrapper')[0]
    const openSection = Array.from(wrapperDiv.children)[1]
    const progressSection = Array.from(wrapperDiv.children)[2]
    const completeSection = Array.from(wrapperDiv.children)[3]


    addBtn.addEventListener('click', addTask)

    function addTask(e) {
        e.preventDefault()

        let task = taskInput.value
        let description = descriptionInput.value
        let date = dateInput.value

        if (task === '' || description === '' || date === '') {return}

        let articleElement = document.createElement('article')
        let h3 = document.createElement('h3')
        h3.textContent = task

        let descriptionParagraph = document.createElement('p')
        descriptionParagraph.textContent = `Description: ${description}`

        let dateParagraph = document.createElement('p')
        dateParagraph.textContent = `Due Date: ${date}`

        let divButtons = document.createElement('div')
        divButtons.classList.add('flex')

        let startBtn = createButtons('green', 'Start', startFunc)
        let deleteBtn = createButtons('red', 'Delete', deleteFunc)
        divButtons.appendChild(startBtn)
        divButtons.appendChild(deleteBtn)

        articleElement.appendChild(h3)
        articleElement.appendChild(descriptionParagraph)
        articleElement.appendChild(dateParagraph)
        articleElement.appendChild(divButtons)

        openSection.lastElementChild.appendChild(articleElement)

        taskInput.value = ''
        descriptionInput.value = ''
        dateInput.value = ''
    }


    function startFunc(startEvent) {
        let currentArticle = startEvent.currentTarget.parentElement.parentElement
        currentArticle.lastElementChild.remove()
        let newDivBtn = document.createElement('div')
        newDivBtn.classList.add('flex')

        let newDeleteBtn = createButtons('red', 'Delete', deleteFunc)
        let finishBtn = createButtons('orange', 'Finish', finishFunc)
        newDivBtn.appendChild(newDeleteBtn)
        newDivBtn.appendChild(finishBtn)
        currentArticle.appendChild(newDivBtn)

        progressSection.lastElementChild.appendChild(currentArticle)
    }
    function deleteFunc(deleteEvent) {
        let deleteArticle = deleteEvent.currentTarget.parentElement.parentElement
        deleteArticle.remove()
    }

    function finishFunc(finishEvent) {
        let finishArticle = finishEvent.currentTarget.parentElement.parentElement
        finishArticle.lastElementChild.remove()
        completeSection.lastElementChild.appendChild(finishArticle)
    }

    function createButtons(buttonClass, buttonText, someFunction) {
        let btn = document.createElement('button')
        btn.classList.add(buttonClass)
        btn.textContent = buttonText
        btn.addEventListener('click', someFunction)
        return btn
    }
}