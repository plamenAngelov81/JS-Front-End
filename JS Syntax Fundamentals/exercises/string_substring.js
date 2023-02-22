function string_substring(wordToFind, sentence) {
    let words = sentence.split(" ");
    for (let i = 0; i < words.length; i++) {
        let word = words[i].toLowerCase();
        if (word === wordToFind) {
            return console.log(`${word}`);
        }
    }
    console.log(`${wordToFind} not found!`)

}

string_substring('javascript', 'JavaScript is the best programming language')

string_substring('python',
    'JavaScript is the best programming language')




