function convertToJSON(firstName, lastName, hairColor) {
    let personData = {
        name: firstName,
        lastName: lastName,
        hairColor: hairColor
    }

    let jsonText = JSON.stringify(personData)
    console.log(jsonText)
}

convertToJSON('George', 'Jones', 'Brown')