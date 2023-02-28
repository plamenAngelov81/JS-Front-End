function replaceRepeatingChars(string) {
    let letter = NaN
    let someString = ''
    for (let ch of string){
        if (ch !== letter) {
            someString += ch
            letter = ch
        }
    }
    console.log(someString)
}

replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa')