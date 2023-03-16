function extractText() {
    let arrLi = document.getElementsByTagName('li')
    arrLi = Array.from(arrLi)
    let currentArr = []
    for (const element of arrLi) {
        currentArr.push(element.textContent)
    }
    let textAreaEl = document.getElementById('result')
    textAreaEl.textContent = currentArr.join('\n')
}