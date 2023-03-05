function pirates(data) {
    let towns = {}
    while (true) {
        let townData = data.shift()
        if (townData === 'Sail') {
            break
        }
        let town = townData.split('||')[0]
        let population = Number(townData.split('||')[1])
        let gold = Number(townData.split('||')[2])
        if(town in towns) {
            towns[town][0] += population
            towns[town][1] += gold
        } else {
            towns[town] = [population, gold]
        }
    }

    for (let i = 0; i < data.length - 1; i++) {
        let attackData = data[i].split('=>')
        let attackType = attackData[0]
        let attackedTown = attackData[1]
        if (attackType === 'Plunder') {
            let people = Number(attackData[2])
            let loot = Number(attackData[3])
            towns[attackedTown][0] -= people
            towns[attackedTown][1] -= loot
            console.log(`${attackedTown} plundered! ${loot} gold stolen, ${people} citizens killed.`)
            if (towns[attackedTown][0] === 0 || towns[attackedTown][1] === 0) {
                console.log(`${attackedTown} has been wiped off the map!`)
                delete towns[attackedTown]
            }
        } if (attackType === 'Prosper') {
            let income = Number(attackData[2])
            if (income < 0) {
                console.log("Gold added cannot be a negative number!")
            } else {
                towns[attackedTown][1] += income
                console.log(`${income} gold added to the city treasury. ${attackedTown} now has ${towns[attackedTown][1]} gold.`)
            }
        }
    }
    let townResults = Object.entries(towns)

    if (townResults.length === 0) {
        console.log("Ahoy, Captain! All targets have been plundered and destroyed!")
    } else if (townResults.length > 0) {
        console.log(`Ahoy, Captain! There are ${townResults.length} wealthy settlements to go to:`)
        for (let j = 0; j < townResults.length; j++) {
            console.log(`${townResults[j][0]} -> Population: ${townResults[j][1][0]} citizens, Gold: ${townResults[j][1][1]} kg`)
        }
    }
}

// pirates((["Tortuga||345000||1250",
//     "Santo Domingo||240000||630",
//     "Havana||410000||1100",
//     "Sail",
//     "Plunder=>Tortuga=>75000=>380",
//     "Prosper=>Santo Domingo=>180",
//     "End"]))

pirates((["Nassau||95000||1000",
    "San Juan||930000||1250",
    "Campeche||270000||690",
    "Port Royal||320000||1000",
    "Port Royal||100000||2000",
    "Sail",
    "Prosper=>Port Royal=>-200",
    "Plunder=>Nassau=>94000=>750",
    "Plunder=>Nassau=>1000=>150",
    "Plunder=>Campeche=>150000=>690",
    "End"]))