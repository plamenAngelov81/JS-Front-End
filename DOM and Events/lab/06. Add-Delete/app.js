function addItem() {
    let ulContainer = document.getElementById('items')
    let input = document.getElementById('newItemText')
    const newLi = document.createElement('li')
    const newAnchor = document.createElement('a')
    newAnchor.href = '#'
    newLi.textContent = input.value
    newAnchor.textContent = '[Delete]'
    newAnchor.addEventListener('click', deleteHandler)
    newLi.appendChild(newAnchor)
    ulContainer.appendChild(newLi)

    input.value = ''

    function  deleteHandler(e) {
        const liItem = e.currentTarget.parentElement
        liItem.remove()
    }
}