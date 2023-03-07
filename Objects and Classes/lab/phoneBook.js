function phoneBook(data) {
    let phoneBookObj = {}

    while (data.length > 0) {
        let currentData = data.shift().split(' ')
        let name = currentData[0]
        let phoneNum = currentData[1]
        if (name in phoneBookObj) {
            phoneBookObj[name] = phoneNum
        } else {
            phoneBookObj[name] = phoneNum
        }
    }

    for (const phoneBookObjElement of Object.keys(phoneBookObj)) {
        console.log(`${phoneBookObjElement} -> ${phoneBookObj[phoneBookObjElement]}`)
    }
}

phoneBook(
    ['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344'])