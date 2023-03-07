function addressBook(data) {
    let addressBookObj = {}

    while (data.length > 0) {
        let currentData = data.shift().split(':')
        let name = currentData[0]
        let address = currentData[1]
        if (name in addressBookObj) {
            addressBookObj[name] = address
        } else {
            addressBookObj[name] = address
        }
    }

    let sortedObj = Object.keys(addressBookObj).sort()
    for (const name of sortedObj) {
        console.log(`${name} -> ${addressBookObj[name]}`)
    }
}

addressBook(['Bob:Huxley Rd',
    'John:Milwaukee Crossing',
    'Peter:Fordem Ave',
    'Bob:Redwing Ave',
    'George:Mesta Crossing',
    'Ted:Gateway Way',
    'Bill:Gateway Way',
    'John:Grover Rd',
    'Peter:Huxley Rd',
    'Jeff:Gateway Way',
    'Jeff:Huxley Rd'])