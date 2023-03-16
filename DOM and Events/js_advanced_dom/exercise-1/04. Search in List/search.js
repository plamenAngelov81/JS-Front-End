function search() {
    let textValue = document.getElementById('searchText').value
    let liTextContent = Array.from(document.getElementsByTagName('li'))
    let counter = 0
    for (const liElement of liTextContent) {
        if (liElement.textContent.includes(textValue)) {
            liElement.style.fontWeight = 'bold'
            liElement.style.textDecoration = 'underline'
            counter += 1
        }
    }
    let resultElement = document.getElementById('result')
    resultElement.textContent = `${counter} matches found`
}
