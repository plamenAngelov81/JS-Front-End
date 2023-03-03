function plantDiscovery(data) {
    let numberOfPlants = Number(data.shift())
    let plantsObj = {}
    let counter = 0
    while (counter < numberOfPlants){
        let plantData = data.shift().split('<->')
        let plant = plantData[0]
        let rarity = plantData[1]
        plantsObj[plant] = [rarity, []]
        counter += 1
    }

    let commandCounter = 0
    while (true) {
        if (data[commandCounter] === 'Exhibition') {
            break
        } else {
            let commandData = data[commandCounter].split(': ')
            let command = commandData[0]

            if (command === 'Rate') {
                let rateData = commandData[1].split(' - ')
                let ratePlant = rateData[0]
                let rating = rateData[1]
                if (ratePlant in plantsObj) {
                    plantsObj[ratePlant][1].push(rating)
                } else {
                    console.log("error")
                }
            } else if (command === 'Update') {
                let updateData = commandData[1].split(' - ')
                let updatePlant = updateData[0]
                let ratingToUpdate = updateData[1]
                if (updatePlant in plantsObj) {
                    plantsObj[updatePlant][0] = ratingToUpdate
                } else {
                    console.log('error')
                }
            } else if (command === 'Reset') {
                let resetPlant = commandData[1]
                if (resetPlant in plantsObj) {
                    plantsObj[resetPlant][1] = []
                } else {
                    console.log('error')
                }
            }
        }
        commandCounter += 1
    }

    function getAverageRating(numbers) {
        if (numbers.length === 0) {
            return 0
        } else {
            numbers = numbers.map(Number)
            return numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0) / numbers.length;
        }
    }

    console.log('Plants for the exhibition:')
    let plantsArr = Object.entries(plantsObj)
    for (let i = 0; i <plantsArr.length; i++) {
        let averageRating = getAverageRating(plantsArr[i][1][1])
        console.log(`- ${plantsArr[i][0]}; Rarity: ${plantsArr[i][1][0]}; Rating: ${averageRating.toFixed(2)}`)
    }
}

plantDiscovery(["3",
    "Arnoldii<->4",
    "Woodii<->7",
    "Welwitschia<->2",
    "Rate: Woodii - 10",
    "Rate: Welwitschia - 7",
    "Rate: Arnoldii - 3",
    "Rate: Woodii - 5",
    "Update: Woodii - 5",
    "Reset: Arnoldii",
    "Exhibition"])