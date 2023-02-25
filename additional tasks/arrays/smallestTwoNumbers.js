function smallestTwoNumbers(someArr) {
    someArr.sort((a, b) => {return a - b})
    let result = someArr.slice(0, 2)
    console.log(result.join(' '))
}

smallestTwoNumbers([30, 15, 50, 5])
smallestTwoNumbers([3, 0, 10, 4, 7, 3])