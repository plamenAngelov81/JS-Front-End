function factorialDivision(firstNum, secondNum) {

    function factorial(a) {
        let result = 1
        if (a === 0) {
            result = 1
        } else {
            for (let i = 1; i <= a; i++) {
                result = result * i
            }
        }
        return result
    }
    let division = factorial(firstNum) / factorial(secondNum)
    console.log(division.toFixed(2))
}

factorialDivision(6, 2)