function editElement(element, currentText, replacement) {
    const someString = element.textContent
    const pattern = new RegExp(currentText, 'g')
    const result = someString.replace(pattern, replacement)
    element.textContent = result
}