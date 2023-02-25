function processOddNumbers(numArr) {
    let newArr = []

    for (let i = 0; i < numArr.length; i++) {
        if (i % 2 === 1) {
            newArr.push(numArr[i] * 2)
        }
    }
    newArr.reverse()
    console.log(newArr.join(' '))
}

processOddNumbers([3, 0, 10, 4, 7, 3])