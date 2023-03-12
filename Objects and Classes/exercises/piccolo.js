function piccolo(data) {
    let cars = []
    for (const line of data) {
        let command = line.split(', ')[0]
        let carNumber = line.split(', ')[1]
        if (command === 'IN'){
            if (!cars.includes(carNumber)) {
                cars.push(carNumber)
            }
        } else if (command === 'OUT') {
            if (cars.includes(carNumber)) {
                let index = cars.indexOf(carNumber)
                cars.splice(index, 1)
            }
        }
    }
    cars.sort()
    if (cars.length === 0) {
        console.log('Parking Lot is Empty')
    } else {
        console.log(cars.join('\n'))
    }

}

piccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU'])