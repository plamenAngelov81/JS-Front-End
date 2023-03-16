function calc() {
    let numOne = Number(document.getElementById('num1').value)
    let numTwo = Number(document.getElementById('num2').value)

    let sum = numOne + numTwo
    document.getElementById('sum').value = sum
}
