function needForSpeed(data) {
    let numberOfCars = Number(data.shift())
    let cars = {}
    let counter = 0
    while (counter < numberOfCars) {
        let carData = data.shift().split('|')
        let car = carData[0]
        let mileage = Number(carData[1])
        let fuel = Number(carData[2])
        cars[car] = [mileage, fuel]
        counter += 1
    }

    let commandCounter = 0
    while (true) {
        if (data[commandCounter] === 'Stop') { break }

        let commandData = data[commandCounter].split(' : ')
        let command = commandData[0]
        if (command === 'Drive') {
            let currentCar = commandData[1]
            let distance = Number(commandData[2])
            let currentFuel = Number(commandData[3])
            if (cars[currentCar][1] >= currentFuel) {
                cars[currentCar][0] += distance
                cars[currentCar][1] -= currentFuel
                console.log(`${currentCar} driven for ${distance} kilometers. ${currentFuel} liters of fuel consumed.`)
                if (cars[currentCar][0] >= 100000) {
                    delete cars[currentCar]
                    console.log(`Time to sell the ${currentCar}!`)
                }
            } else {
                console.log("Not enough fuel to make that ride")
            }
        } else if (command === 'Refuel') {
            let carModel = commandData[1]
            let refuel = Number(commandData[2])
            let littersFree = 75 - cars[carModel][1]
            let newTank = refuel + cars[carModel][1]
            if (littersFree >= refuel){
                cars[carModel][1] = newTank
                console.log(`${carModel} refueled with ${refuel} liters`)
            } else {
                cars[carModel][1] += littersFree
                console.log(`${carModel} refueled with ${littersFree} liters`)
            }
        } else if (command === 'Revert') {
            let revertedCar = commandData[1]
            let kilometers = Number(commandData[2])
            cars[revertedCar][0] -= kilometers
            if (cars[revertedCar][0] < 10000) {
                cars[revertedCar][0] = 10000
            } else {
                console.log(`${revertedCar} mileage decreased by ${kilometers} kilometers`)
            }
        }
        commandCounter += 1
    }

    let finalData = Object.entries(cars)
    for (let i = 0; i < finalData.length; i++){
        console.log(`${finalData[i][0]} -> Mileage: ${finalData[i][1][0]} kms, Fuel in the tank: ${finalData[i][1][1]} lt.`)
    }
}

needForSpeed([
    '4',
    'Lamborghini Veneno|11111|74',
    'Bugatti Veyron|12345|67',
    'Koenigsegg CCXR|67890|12',
    'Aston Martin Valkryie|99900|50',
    'Drive : Koenigsegg CCXR : 382 : 82',
    'Drive : Aston Martin Valkryie : 99 : 23',
    'Drive : Aston Martin Valkryie : 2 : 1',
    'Refuel : Lamborghini Veneno : 40',
    'Revert : Bugatti Veyron : 2000',
    'Stop'
])