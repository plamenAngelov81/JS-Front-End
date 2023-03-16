function addItem() {
    let ulElement = document.getElementById('items')
    let input = document.getElementById('newItemText')
    const newLi = document.createElement('li')
    newLi.textContent = input.value
    ulElement.appendChild(newLi)
    input.value = ''

}