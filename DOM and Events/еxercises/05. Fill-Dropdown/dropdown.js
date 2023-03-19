function addItem() {
    let selectElement = document.getElementById('menu')
    let elementInputText = document.getElementById('newItemText')
    let elementInputValue = document.getElementById('newItemValue')

    let newItemText = elementInputText.value
    let newItemValue = elementInputValue.value

    let optionElement = document.createElement('option')
    optionElement.value = newItemValue
    optionElement.textContent = newItemText
    selectElement.appendChild(optionElement)
    elementInputText.value = ''
    elementInputValue.value = ''
}