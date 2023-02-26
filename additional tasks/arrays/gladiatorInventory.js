function gladiatorInventory(data) {
    let inventory = data.shift().split(' ')
    for (let i = 0; i < data.length; i++) {
        let command = data[i].split(' ')[0]
        if (command === 'Buy') {
            let itemToBuy = data[i].split(' ')[1]
            if (!inventory.includes(itemToBuy)) {
                inventory.push(itemToBuy)
            }
        }
        else if (command === 'Trash') {
            let item = data[i].split(' ')[1]
            if (inventory.includes(item)) {
                let itemIndex = inventory.indexOf(item)
                inventory.splice(itemIndex, 1)
            }
        }
        else if (command === 'Repair') {
            let repairedItem = data[i].split(' ')[1]
            if (inventory.includes(repairedItem)) {
                let repairIndex = inventory.indexOf(repairedItem)
                let currentItem = inventory.splice(repairIndex, 1)
                inventory.push(currentItem)
            }
        }
        else if (command === 'Upgrade'){
            let upgradeData = data[i].split(' ')[1]
            let itemToUpgrade = upgradeData.split('-')[0]
            if (inventory.includes(itemToUpgrade)) {
                let material = upgradeData.split('-')[1]
                let indexToUpgrade = inventory.indexOf(itemToUpgrade)
                let currentElement = `${itemToUpgrade}:${material}`
                inventory.splice(indexToUpgrade + 1, 0, currentElement)
            }
        }
    }
    console.log(inventory.join(' '))
}

gladiatorInventory(['SWORD Shield Spear', 'Buy Bag', 'Trash Shield', 'Repair Spear', 'Upgrade SWORD-Steel'])
gladiatorInventory(['SWORD Shield Spear',
    'Trash Bow',
    'Repair Shield',
    'Upgrade Helmet-V'])