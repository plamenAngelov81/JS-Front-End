function sumFirstAndLast(someArr) {
    let lastNum = Number(someArr.pop())
    let firstNum = Number(someArr.shift())
    let firstLastSum = lastNum + firstNum
    console.log(firstLastSum)
}

sumFirstAndLast(['10', '15'])