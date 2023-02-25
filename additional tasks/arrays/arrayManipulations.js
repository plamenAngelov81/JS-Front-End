function arrayManipulations(input) {
    let numbers = input.shift()
    let commandDataArr = input
    let numbersArr = numbers.split(' ')
    numbersArr = numbersArr.map(item => Number(item))

    for (let i = 0; i < commandDataArr.length; i++) {
        let data  = commandDataArr[i].split(' ')
        let command = data[0]
        if (command === 'Add') {
            let currentNum = Number(data[1])
            numbersArr.push(currentNum)
        } else if (command === 'Remove') {
            let removedNum = Number(data[1])
            numbersArr = numbersArr.filter(function (currentNum) {return currentNum !== removedNum})
        } else if (command === 'RemoveAt') {
            let index = Number(data[1])
            numbersArr.splice(index, 1)
        } else if (command === 'Insert') {
            let insertNum = Number(data[1])
            let currentIndex = Number(data[2])
            numbersArr.splice(currentIndex, 0, insertNum);
        }
    }
    console.log(numbersArr.join(' '))
}

arrayManipulations(['4 19 2 53 6 43', 'Add 3', 'Remove 2', 'RemoveAt 1', 'Insert 8 3'])
arrayManipulations(['6 12 2 65 6 42',
    'Add 8',
    'Remove 12',
    'RemoveAt 3',
    'Insert 6 2'])