function convertToObject(someString) {
    let info = JSON.parse(someString)

    for (const infoElement of Object.keys(info)) {
        console.log(`${infoElement}: ${info[infoElement]}`)
    }
}

convertToObject('{"name": "George", "age": 40, "town": "Sofia"}')