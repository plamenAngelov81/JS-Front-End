function subtract() {
    let firstNum = Number(document.getElementById('firstNumber').value)
    let secondNum = Number(document.getElementById('secondNumber').value)

    let subtractResult = firstNum - secondNum
    let divElement = document.getElementById('result')
    divElement.textContent = subtractResult.toString()
}