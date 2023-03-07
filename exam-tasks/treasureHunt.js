function treasureHunt(data) {
    let treasureChest = data.shift().split('|')

    function addItems(someArr) {
        for (let j = 0; j < someArr.length; j++) {
            if (!treasureChest.includes(someArr[j])) {
                treasureChest.unshift(someArr[j])
            }
        }
    }

    function removeItems(currentArr, counter) {
        let stolenItems = []
        for (let k = 0; k < counter; k++) {
            let stolenGoods = currentArr.pop()
            stolenItems.push(stolenGoods)
        }
        return stolenItems.reverse()
    }

    for (let i = 0; i < data.length - 1; i++) {
        let commandData = data[i].split(' ')
        let command = commandData.shift()
        if (command === 'Loot') {
            addItems(commandData)
        } else if (command === 'Drop') {
            let dropIndex = Number(commandData[0])
            if (0 <= dropIndex && dropIndex < treasureChest.length) {
                let currentItem = treasureChest.splice(dropIndex, 1)[0]
                treasureChest.push(currentItem)
            }
        } else if (command === 'Steal') {
            let count = Number(commandData[0])
            if (count >= treasureChest.length) {
                console.log(treasureChest.join(', '))
                treasureChest = []
            } else {
                console.log(removeItems(treasureChest, count).join(', '))
            }
        }
    }

    let chestSum = 0
    for (let element of treasureChest) {
        chestSum += element.length
    }
    let averageGain = chestSum / treasureChest.length

    if (treasureChest.length === 0) {

        console.log("Failed treasure hunt.")
    } else {
        console.log(`Average treasure gain: ${averageGain.toFixed(2)} pirate credits.`)
    }
}

//treasureHunt(["Gold|Silver|Bronze|Medallion|Cup", "Loot Wood Gold Coins", "Loot Silver Pistol", "Drop 3", "Steal 3", "Yohoho!"])

treasureHunt(["Diamonds|Silver|Shotgun|Gold",
    "Loot Silver Medals Coal",
    "Drop -1",
    "Drop 1",
    "Steal 6",
    "Yohoho!"])