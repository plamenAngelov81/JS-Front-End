function splitPascalCase(some_string) {
    let transformed_list = []
    let word = ''

    while (some_string.length >0) {
        let ch = some_string[0]
        if (word.length === 0 && ch === ch.toUpperCase()) {
            word += ch
        }
        else if (word.length > 0 && ch === ch.toLowerCase()) {
            word += ch
        }
        else {
            transformed_list.push(word)
            word = ''
            word += ch
        }
        some_string = some_string.slice(1)
    }
    if (word.length > 0){
        transformed_list.push(word)
    }
    console.log(transformed_list.join(', '))
}



splitPascalCase('SplitMeIfYouCanHaHaYouCantOrYouCan')

