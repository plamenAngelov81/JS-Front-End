function sorting(input) {
    input.sort((a, b) => (a - b))
    let sortedArr = []
    while (input.length > 0) {
        let firstNum = input.pop()
        let secondNum = input.shift()
        sortedArr.push(firstNum, secondNum)
    }
    console.log(sortedArr.join(' '))
}


sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])
sorting([34, 2, 32, 45, 690, 6, 32, 7, 19, 47])