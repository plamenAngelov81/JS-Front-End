function solve() {
    let currentText = document.getElementById('text').value
    let currentTextArr = currentText.split(' ').map((el) => el.toLowerCase())

    let transformType = document.getElementById('naming-convention').value

    let resultText = []
    if (transformType === 'Camel Case') {
        for (let i = 0; i < currentTextArr.length; i++) {
            let element = currentTextArr[i].split('')
            if (i === 0) {
                resultText.push(element.join(''))
            } else {
                let ch = element.shift().toUpperCase()

                element.unshift(ch)

                resultText.push(element.join(''))
            }
        }
    } else if (transformType === 'Pascal Case') {
        for (let i = 0; i < currentTextArr.length; i++) {
            let element = currentTextArr[i].split('')
            let ch = element.shift().toUpperCase()
            element.unshift(ch)
            resultText.push(element.join(''))
        }
    } else {
        let errorElement = 'Error!'
        resultText.push(errorElement)
    }
    let divElement = document.getElementById('result')
    divElement.textContent = resultText.join('')
}
