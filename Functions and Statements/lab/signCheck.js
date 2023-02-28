function signCheck(num1, num2, num3) {
    let numbers = []
    numbers.push(num1)
    numbers.push(num2)
    numbers.push(num3)
    let negative = 0
    for (let number of numbers) {
        if (number < 0) {
            negative += 1
        }
    }
    let result = ''
    if (negative === 0) {
        result += 'Positive'
    } else if (negative === 1) {
        result += 'Negative'
    } else if (negative === 2) {
        result += 'Positive'
    } else if (negative === 3) {
        result += 'Negative'
    }
    console.log(result)
}

signCheck(-5, -12, -15)