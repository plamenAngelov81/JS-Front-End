function firstAndLastKNumbers(numArr) {
    let k = numArr.shift()
    let firstList = numArr.slice(0, k)
    let secondList = numArr.slice(-k)
    console.log(firstList.join(' '))
    console.log(secondList.join(' '))
}

firstAndLastKNumbers([3, 6, 7, 8, 9])