window.addEventListener("load", solve);

function solve() {
    const firstnameElement = document.getElementById('first-name')
    const lastnameElement = document.getElementById('last-name')
    const ageElement = document.getElementById('age')
    const genderElement = document.getElementById('genderSelect')
    const taskElement = document.getElementById('task')
    const submitBtn = document.getElementById('form-btn')
    const progressStatusElement = document.getElementById('in-progress')
    const progressCountElement = document.getElementById('progress-count')
    const finishedUlElement = document.getElementById('finished')
    const clearBtn = document.getElementById('clear-btn')

    let first = ''
    let last = ''
    let age = ''
    let gender = ''
    let task = ''
    let counter = 0

    function createArticle(firstname, lastname, chefAge, chefGender, taskArea) {
        let articleElement = document.createElement('article')
        let fullName = document.createElement('h4')
        let ageGenderElementCreate = document.createElement('p')
        let taskAreaElementCreate = document.createElement('p')

        fullName.textContent = `${firstname} ${lastname}`
        articleElement.appendChild(fullName)

        ageGenderElementCreate.textContent = `${chefGender}, ${chefAge}`
        articleElement.appendChild(ageGenderElementCreate)

        taskAreaElementCreate.textContent = `Dish description: ${taskArea}`
        articleElement.appendChild(taskAreaElementCreate)

        return articleElement
    }

    function createButton(className, context, someFunction) {
        let currentBtn = document.createElement('button')
        currentBtn.classList.add(className)
        currentBtn.textContent = context
        currentBtn.addEventListener("click", someFunction)
        return currentBtn
    }

    submitBtn.addEventListener("click", submitInfo)
    clearBtn.addEventListener("click", clearAll)

    function submitInfo(e) {
        e.preventDefault()

        first = firstnameElement.value
        last = lastnameElement.value
        age = ageElement.value
        gender = genderElement.value
        task = taskElement.value

        if (first === '' ||
            last === '' ||
            age === '' ||
            gender === '' ||
            task === '') {
            return
        }

        let articleElement = createArticle(first, last, age, gender, task)

        let liElement = document.createElement('li')
        liElement.classList.add('each-line')

        let editBtn = createButton('edit-btn', 'Edit', editInfo)
        let completeBtn = createButton('complete-btn', 'Mark as complete', completeDish)

        liElement.appendChild(articleElement)
        liElement.appendChild(editBtn)
        liElement.appendChild(completeBtn)
        progressStatusElement.appendChild(liElement)

        counter += 1
        progressCountElement.textContent = counter

        firstnameElement.value = ''
        lastnameElement.value = ''
        ageElement.value = ''
        genderElement.value = ''
        taskElement.value = ''
    }

    function editInfo (eventEdit) {
        const ulElement = eventEdit.target.parentElement.parentElement
        const liElement = eventEdit.target.parentElement
        const articleElement = Array.from(liElement.children)[0]
        let elements = Array.from(articleElement.children)

        let h4 = elements[0]
        firstnameElement.value = h4.textContent.split(' ')[0]
        lastnameElement.value = h4.textContent.split(' ')[1]


        let ageGenderData = elements[1]

        ageElement.value = ageGenderData.textContent.split(', ')[1]
        genderElement.value = ageGenderData.textContent.split(', ')[0]

        taskElement.value = elements[2].textContent.split(': ')[1]

        counter -= 1
        progressCountElement.textContent = counter

        ulElement.removeChild(liElement)
    }

    function completeDish (eventComplete) {
        // let ulElement = eventComplete.target.parentElement.parentElement
        let liElement = eventComplete.target.parentElement

        let removeEditBtn = liElement.children[1]
        let removeCompleteBtn = liElement.children[2]
        removeEditBtn.remove()
        removeCompleteBtn.remove()
        finishedUlElement.appendChild(liElement)

        counter -= 1
        progressCountElement.textContent = counter
    }

    function clearAll() {
        let finishedDishes = Array.from(finishedUlElement.children)
        for (const dish of finishedDishes) {
            finishedUlElement.removeChild(dish)
        }
    }
}
