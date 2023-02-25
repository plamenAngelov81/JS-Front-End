function splitPascalCase(someString) {
    let transformedList = []
    let word = ''

    while (someString.length > 0) {
        let ch = someString[0]
        if (word.length === 0 && ch === ch.toUpperCase()) {
            word += ch
        }
        else if (word.length > 0 && ch === ch.toLowerCase()) {
            word += ch
        }
        else {
            transformedList.push(word)
            word = ''
            word += ch
        }
        someString = someString.slice(1)
    }

    transformedList.push(word)

    console.log(transformedList.join(', '))
}

splitPascalCase('SplitMeIfYouCanHaHaYouCantOrYouCan')

