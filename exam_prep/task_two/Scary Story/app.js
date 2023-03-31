window.addEventListener("load", solve);

function solve() {
    const firstnameElement = document.getElementById('first-name')
    const lastnameElement = document.getElementById('last-name')
    const ageElement = document.getElementById('age')
    const titleElement = document.getElementById('story-title')
    const storyElement = document.getElementById('story')
    const genreElement = document.getElementById('genre')
    const previewListElement = document.getElementById('preview-list')
    const mainDiv = document.getElementById('main')

    const publishButton = document.getElementById('form-btn')
    publishButton.addEventListener("click", publishStory)

    let first = ''
    let last = ''
    let age = ''
    let title = ''
    let story = ''
    let genre = ''

    function createArticle(firstname, lastname, authorAge, bookTitle, bookStory, genre) {
        let articleElement = document.createElement('article')
        let fullName = document.createElement('h4')
        let ageElementCreate = document.createElement('p')
        let titleElementCreate = document.createElement('p')
        let storyElementCreate = document.createElement('p')
        let genreElementCreate = document.createElement('p')

        fullName.textContent = `Name: ${firstname} ${lastname}`
        articleElement.appendChild(fullName)

        ageElementCreate.textContent = `Age: ${authorAge}`
        articleElement.appendChild(ageElementCreate)

        titleElementCreate.textContent = `Title: ${bookTitle}`
        articleElement.appendChild(titleElementCreate)

        genreElementCreate.textContent = `Genre: ${genre}`
        articleElement.appendChild(genreElementCreate)

        storyElementCreate.textContent = `${bookStory}`
        articleElement.appendChild(storyElementCreate)

        return articleElement
    }

    function createButton(className, context, someFunction) {
        let currentBtn = document.createElement('button')
        currentBtn.classList.add(className)
        currentBtn.textContent = context
        currentBtn.addEventListener("click", someFunction)
        return currentBtn
    }

    function publishStory(e) {
        e.preventDefault()
        first = firstnameElement.value
        last = lastnameElement.value
        age = ageElement.value
        title = titleElement.value
        story = storyElement.value
        genre = genreElement.value

        if (
            first === '' ||
            last === '' ||
            age === '' ||
            title === '' ||
            story === '' ||
            genre === '') {
            return
        }

        let articleElement = createArticle(first, last, age, title, story, genre)

        let liElement = document.createElement('li')
        liElement.classList.add('story-info')

        let saveBtn = createButton('save-btn', 'Save Story', saveStory)
        let editBtn = createButton('edit-btn', 'Edit Story', editStory)
        let deleteBtn = createButton('delete-btn', 'Delete Story', deleteStory)

        liElement.appendChild(articleElement)
        liElement.appendChild(saveBtn)
        liElement.appendChild(editBtn)
        liElement.appendChild(deleteBtn)
        previewListElement.appendChild(liElement)

        publishButton.disabled = true
        firstnameElement.value = ''
        lastnameElement.value = ''
        ageElement.value = ''
        titleElement.value = ''
        storyElement.value = ''
        genreElement.value = ''
    }

    function editStory() {
        let elementToRemove = Array.from(document.getElementsByClassName('story-info'))[0]
        elementToRemove.remove()
        publishButton.disabled = false

        firstnameElement.value = first
        lastnameElement.value = last
        ageElement.value = age
        titleElement.value = title
        storyElement.value = story
        genreElement.value = genre
    }

    function deleteStory() {
        let elementToRemove = Array.from(document.getElementsByClassName('story-info'))[0]
        elementToRemove.remove()
        publishButton.disabled = false
    }

    function saveStory() {
        let sideWrapperElement = document.getElementById('side-wrapper')
        sideWrapperElement.remove()

        let formWrapperElement = Array.from(document.getElementsByClassName('form-wrapper'))[0]
        formWrapperElement.remove()

        let headingElement = document.createElement('h1')
        headingElement.textContent = "Your scary story is saved!"

        mainDiv.appendChild(headingElement)
    }
}
