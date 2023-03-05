function memoryGame(data) {
    let numbers = data.shift().split(' ')
    let turns = 0

    let counter = 0
    while (numbers.length > 0) {
        turns += 1
        let indexData = data[counter]
        if (indexData === 'end') {
            break
        }

        let firstIndex = Number(indexData.split(' ')[0])
        let secondIndex = Number(indexData.split(' ')[1])

        if (firstIndex !== secondIndex
            && 0 <= firstIndex
            && firstIndex <= numbers.length -1
            && 0 <= secondIndex
            && secondIndex <= numbers.length -1) {

            if (numbers[firstIndex] === numbers[secondIndex]) {
                console.log(`Congrats! You have found matching elements - ${numbers[firstIndex]}!`)
                let currenElement = numbers[firstIndex]
                numbers.splice(firstIndex, 1)
                let elementTwo = numbers.indexOf(currenElement)
                numbers.splice(elementTwo, 1)
            }else {
                console.log('Try again!')
            }
        } else {
            console.log("Invalid input! Adding additional elements to the board")
            let middleIndex = Math.floor(numbers.length / 2)
            numbers.splice(middleIndex, 0, `-${turns}a`);
            numbers.splice(middleIndex, 0, `-${turns}a`);
        }
        counter += 1
    }
    if (numbers.length > 0) {
        console.log("Sorry you lose :(")
        console.log(numbers.join(' '))
    } else {
        console.log(`You have won in ${turns} turns!`)
    }
}

//memoryGame( ["1 1 2 2 3 3 4 4 5 5", "1 0", "-1 0", "1 0", "1 0", "1 0", "end"])

//memoryGame(["a 2 4 a 2 4", "0 3", "0 2", "0 1", "0 1", "end"])

memoryGame(["a 2 4 a 2 4", "4 0", "0 2", "0 1", "0 1", "end"])