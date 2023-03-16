function garage(data) {
    class Car {
        constructor(color, fuel, manufacture) {
            this.color = color
            this.fuel = fuel
            this.manufacture = manufacture
        }
    }

    let garageObj = {}

    for (const line of data) {
        let garageNum = line.split(' - ')[0]
        let carData = line.split(' - ')[1].split(', ')
        let newCar = new Car('', '', '')
        for (const item of carData) {
            let currentProp = item.split(': ')
            if(currentProp[0] === 'color') {
                newCar.color = currentProp[1]
            } else if (currentProp[0] === 'fuel type') {
                newCar.fuel = currentProp[1]
            } else if (currentProp[0] === 'manufacture') {
                newCar.manufacture = currentProp[1]
            }
        }
        if(garageNum in garageObj) {
            garageObj[garageNum].push(newCar)
        } else {
            garageObj[garageNum] = [newCar]
        }
    }
    let garageArr = Object.entries(garageObj)
    for (let x = 0; x < garageArr.length; x++) {
        console.log(`Garage № ${garageArr[x][0]}`)
        let carStuff = []
        for (let y = 0; y < garageArr[x][1].length; y++) {
            let currentResult = ''
            if (garageArr[x][1][y].color !== '') {
                currentResult = `color - ${garageArr[x][1][y].color}`
                carStuff.push(currentResult)
            }
            if (garageArr[x][1][y].fuel !== '') {
                currentResult = `fuel type - ${garageArr[x][1][y].fuel}`
                carStuff.push(currentResult)
            }
            if (garageArr[x][1][y].manufacture !== '') {
                currentResult = `manufacture - ${garageArr[x][1][y].manufacture}`
                carStuff.push(currentResult)
            }
            console.log(`--- ${carStuff.join(', ')}`)
            carStuff = []
        }

    }
}

garage([
    '1 - color: blue, fuel type: diesel',
    '1 - color: red, manufacture: Audi',
    '2 - fuel type: petrol',
    '4 - color: dark blue, fuel type: diesel, manufacture: Fiat'])