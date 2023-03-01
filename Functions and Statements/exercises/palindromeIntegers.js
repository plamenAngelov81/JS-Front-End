function palindromeIntegers(nums) {
    for (let i of nums){
        let firstNum = i
        let secondNum = Number(i.toString().split('').reverse().join(''))
        if (firstNum === secondNum) {
            console.log('true')
        }else {
            console.log('false')
        }
    }
}

palindromeIntegers([32,2,232,1010])
