function solve(string){
    string = string.split(' ')
    function onlyLettersAndNumbers(str) {
        return Boolean(str.match(/#[A-Za-z]/));
    }
    for (const word of string){
        if (onlyLettersAndNumbers(word)){
            console.log(word.slice(1, word.length))
        }
    }
}

solve('The symbol # is known #variously in English-speaking #regions as the #number sign')
