function houseParty(input) {
    let partyGuests = []

    for (let i = 0; i < input.length; i++) {
        let currentData = input[i]
        if (currentData.includes('not')) {
            let name = currentData.split(' ')[0]
            if (partyGuests.includes(name)) {
                partyGuests = partyGuests.filter(function (someName) {return someName !== name})
            } else {
                console.log(`${name} is not in the list!`)}
        } else {
            let name = currentData.split(' ')[0]
            if (partyGuests.includes(name)) {
                console.log(`${name} is already in the list!`)
            } else {
                partyGuests.push(name)
            }
        }
    }
    for (let i = 0; i < partyGuests.length; i++) {
        console.log(partyGuests[i])
    }
}

//houseParty(['Allie is going!', 'George is going!', 'John is not going!', 'George is not going!'])
houseParty(['Tom is going!',
    'Annie is going!',
    'Tom is going!',
    'Garry is going!',
    'Jerry is going!'])