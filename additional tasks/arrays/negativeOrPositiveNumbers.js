function negativeOrPositiveNumbers(someArr) {
    let newArr = []
    for (let i of someArr) {
        let currentNum = Number(i)
        if (currentNum >= 0) {
            newArr.push(currentNum);
        } else {
            newArr.unshift(currentNum)
        }
    }
    for (let j of newArr) {
        console.log(j)
    }
}

negativeOrPositiveNumbers(['3', '-2', '0', '-1'])