window.addEventListener("load", solve);

function solve() {
    const titleElement = document.getElementById('post-title')
    const categoryElement = document.getElementById('post-category')
    const contentElement = document.getElementById('post-content')
    const publishBtnElement = document.getElementById('publish-btn')
    const reviewListElement = document.getElementById('review-list')
    const publishedListElement = document.getElementById('published-list')
    const clearBtn = document.getElementById('clear-btn')

    publishBtnElement.addEventListener("click", postPublish)
    clearBtn.addEventListener("click", clearAll)

    let title = ''
    let category = ''
    let postContent = ''

    function postPublish(e) {
        e.preventDefault()
        title = titleElement.value
        category = categoryElement.value
        postContent = contentElement.value

        if(title === '' || category === '' || postContent === '') {
            return
        }

        let publishLiElement = document.createElement('li')
        publishLiElement.classList.add('rpost')

        let currentArticleElement = createArticle(title, category, postContent)

        let editBtn = createButton('action-btn', 'edit', 'Edit', editPost)
        let approveBtn = createButton('action-btn', 'approve', 'Approve', approvePost)

        publishLiElement.appendChild(currentArticleElement)
        publishLiElement.appendChild(editBtn)
        publishLiElement.appendChild(approveBtn)
        reviewListElement.appendChild(publishLiElement)

        titleElement.value = ''
        categoryElement.value = ''
        contentElement.value = ''
    }

    function editPost(eventEdit) {
        let targetLiElement = eventEdit.currentTarget.parentElement
        let currentArticleElement = Array.from(targetLiElement.children)[0]
        let articleElement = Array.from(currentArticleElement.children)
        titleElement.value = articleElement[0].textContent
        categoryElement.value = articleElement[1].textContent
        contentElement.value = articleElement[2].textContent
        reviewListElement.removeChild(targetLiElement)
    }
    function approvePost(eventApprove) {
        let targetLiElement = eventApprove.currentTarget.parentElement

        let approveLiElement = document.createElement('li')
        approveLiElement.classList.add('rpost')

        let liArticleElements = Array.from(targetLiElement.children)[0]
        let currentArticleElements = Array.from(liArticleElements.children)
        let currentTitle = currentArticleElements[0].textContent
        let currentCategory = currentArticleElements[1].textContent
        let currentContent = currentArticleElements[2].textContent

        let approveArticle = createArticle(currentTitle, currentCategory, currentContent)

        approveLiElement.appendChild(approveArticle)

        reviewListElement.removeChild(targetLiElement)
        publishedListElement.appendChild(approveLiElement)
    }

    function clearAll() {
        let elementsToDelete = Array.from(publishedListElement.children)
        elementsToDelete.map((elementTag) => elementTag.remove())
    }

    function createArticle(postTitle, postCategory, postContentText) {
        let articleElement = document.createElement('article')
        let postTitleElement = document.createElement('h4')
        let postCategoryElement = document.createElement('p')
        let postContentElement = document.createElement('p')

        postTitleElement.textContent = `${postTitle}`
        articleElement.appendChild(postTitleElement)

        postCategoryElement.textContent = `${postCategory}`
        articleElement.appendChild(postCategoryElement)

        postContentElement.textContent = `${postContentText}`
        articleElement.appendChild(postContentElement)

        return articleElement
    }

    function createButton(firstClassName, secondClassName, context, eventFunction) {
        let currentBtn = document.createElement('button')
        currentBtn.classList.add(firstClassName)
        currentBtn.classList.add(secondClassName)
        currentBtn.textContent = context
        currentBtn.addEventListener("click", eventFunction)
        return currentBtn
    }
}
