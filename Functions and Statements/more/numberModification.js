function numberModification(num) {
    let currentNum = num.toString()

    function average(someNum){
        let numLen = someNum.length
        let digitSum = 0
        for (let digit of someNum) {
            digitSum += Number(digit)
        }
        let average = digitSum / numLen
        return average
    }

    while (true) {
        if (average(currentNum) < 5) {
            currentNum += "9"
        } else {break}
    }
    console.log(currentNum)
}


numberModification(5835)