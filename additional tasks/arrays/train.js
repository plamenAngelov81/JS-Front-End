function train(input) {
    let wagons = input.shift().split(' ').map(function (num) {return Number(num)})
    let maxCapacity = input.shift()
    let commandData = input

    function addPassengers(numberOfPassengers) {
        for (let i = 0; i < wagons.length; i++) {
            let currentSum = numberOfPassengers + wagons[i]
            if (currentSum <= maxCapacity) {
                wagons[i] += numberOfPassengers
                break
            }
        }
    }

    for (let i = 0; i < commandData.length; i++) {
        let data = commandData[i].split(' ')
        if (data[0] === 'Add') {
            wagons.push(Number(data[1]))
        } else {
            let passengers = Number(data[0])
            addPassengers(passengers)
        }
    }
    console.log(wagons.join(' '))
}

train(['32 54 21 12 4 0 23', '75', 'Add 10', 'Add 0', '30', '10', '75'])
train(['0 0 0 10 2 4',
    '10',
    'Add 10',
    '10',
    '10',
    '10',
    '8',
    '6'])