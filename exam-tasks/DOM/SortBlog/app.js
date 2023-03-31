function solve() {
    const authorElement = document.getElementById('creator')
    const titleElement = document.getElementById('title')
    const categoryElement = document.getElementById('category')
    const contentElement = document.getElementById('content')
    const sectionElement = document.querySelector('.site-content main section')
    const olElementArchive = document.querySelector('.archive-section ol')

    let archivedContentArray = []

    const btnCreate = Array.from(document.getElementsByClassName('create'))[0]
    btnCreate.addEventListener('click', createPost)

    function createPost (e) {
        e.preventDefault()
        let creator = authorElement.value
        let title = titleElement.value
        let category = categoryElement.value
        let content = contentElement.value


        let articleElement = document.createElement('article')

        let titleCreate = document.createElement('h1')
        titleCreate.textContent = title


        //Category
        let categoryPara = document.createElement('p')
        categoryPara.textContent = 'Category:'
        let spanCategory = document.createElement('strong')
        spanCategory.textContent = `${category}`
        categoryPara.appendChild(spanCategory)

        //creator
        let creatorElementCreate = document.createElement('p')
        creatorElementCreate.textContent = 'Creator:'
        let spanCreator = document.createElement("strong")
        spanCreator.textContent = creator
        creatorElementCreate.appendChild(spanCreator)

        //Content
        let contentElementCreate = document.createElement('p')
        contentElementCreate.textContent = content

        //create div with two buttons
        let divButtons = document.createElement('div')
        divButtons.classList.add('buttons')

        let deleteBtn = document.createElement('button')
        deleteBtn.classList.add('btn')
        deleteBtn.classList.add('delete')
        deleteBtn.textContent = 'Delete'
        deleteBtn.addEventListener("click", deletePost)

        let archiveBtn = document.createElement('button')
        archiveBtn.classList.add('btn')
        archiveBtn.classList.add('archive')
        archiveBtn.textContent = 'Archive'
        archiveBtn.addEventListener("click", archivePost)

        divButtons.appendChild(deleteBtn)
        divButtons.appendChild(archiveBtn)

        //add to article element
        articleElement.appendChild(titleCreate)
        articleElement.appendChild(categoryPara)
        articleElement.appendChild(creatorElementCreate)
        articleElement.appendChild(contentElementCreate)
        articleElement.appendChild(divButtons)

        sectionElement.appendChild(articleElement)

        authorElement.value = ''
        titleElement.value = ''
        categoryElement.value = ''
        contentElement.value = ''

    }

    function deletePost(deleteEvent) {
        let elementToDelete = deleteEvent.currentTarget.parentElement.parentElement
        elementToDelete.remove()
    }

    function archivePost(archiveEvent) {
        let archiveArticle = archiveEvent.currentTarget.parentElement.parentElement
        let currentH1 = Array.from(archiveArticle.children)[0]
        archivedContentArray.push(currentH1.textContent)

        archiveArticle.remove()

        olElementArchive.innerHTML = ''

        let sortedArchive = archivedContentArray.sort((a, b) => a.localeCompare(b))

        for (const item of sortedArchive) {
            let li = document.createElement("li")
            li.textContent = item
            olElementArchive.appendChild(li)
        }
    }
}
