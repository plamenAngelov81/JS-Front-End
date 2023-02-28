function simpleCalculator(a , b, operator) {
    let operations = {
        'multiply': a * b,
        'divide': a / b,
        'add': a + b,
        'subtract': a - b
    }

    let result = operations[operator]
    console.log(result)
}

simpleCalculator(5,
    5,
    'add')