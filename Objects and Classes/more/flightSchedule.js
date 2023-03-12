function flightSchedule(data) {
    let allFlights = data.shift()
    let flightStatus = data.shift()
    let flightsArr = []
    let currentStatus = data.shift()
    class Flight {
        constructor(id, destination, status) {
            this.id = id
            this.destination = destination
            this.status = status
        }
    }

    function getFlight(currentId, someArr) {
        for (const someFlight of someArr) {
            if(someFlight.id === currentId) {
                return someFlight
            }
        }
        return false
    }

    for (const line of allFlights) {
        let flightId = line.split(' ')[0]
        let areaDestination = line.split(' ')[1]
        let newFlight = new Flight(flightId, areaDestination, '')
        flightsArr.push(newFlight)
    }

    for (const currentLine of flightStatus) {
        let currentFlightId = currentLine.split(' ')[0]
        let changedStatus = currentLine.split(' ')[1]
        let plane = getFlight(currentFlightId, flightsArr)
        if(plane) {
            plane.status = changedStatus
        }
    }

    if (currentStatus[0] === 'Ready to fly') {
        let readyToFly = flightsArr.filter(obj => obj.status === '')
        for (const ready of readyToFly) {
            ready.status = 'Ready to fly'
            console.log(`{ Destination: '${ready.destination}', Status: '${ready.status}' }`)
        }
    } else {
        let cancelledFlight = flightsArr.filter(obj => obj.status === 'Cancelled')
        for (const cansel of cancelledFlight) {
            console.log(`{ Destination: '${cansel.destination}', Status: '${cansel.status}' }`)
        }
    }
}

flightSchedule([['WN269 Delaware',
    'FL2269 Oregon',
    'WN498 Las Vegas',
    'WN3145 Ohio',
    'WN612 Alabama',
    'WN4010 New York',
    'WN1173 California',
    'DL2120 Texas',
    'KL5744 Illinois',
    'WN678 Pennsylvania'],
    ['DL2120 Cancelled',
        'WN612 Cancelled',
        'WN1173 Cancelled',
        'SK330 Cancelled'],
    ['Ready to fly']
])