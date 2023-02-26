function distinctArray(input) {
    let newArr = []
    while (input.length > 0) {
        let currentNum = input.shift()
        newArr.push(currentNum)
        input = input.filter(function (num) {return num !== currentNum})
    }
    console.log(newArr.join(' '))

}

distinctArray([1, 2, 3, 4])
distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2])
distinctArray([20, 8, 12, 13, 4, 4, 8, 5])