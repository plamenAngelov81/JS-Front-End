function count(text, word) {
    let words = text.split(' ')
    let counter = 0;
    for (current_word of words) {
        if (current_word === word) {
            counter += 1;
        }
    }

    console.log(counter);
}

count('This is a word and it also is a sentence', 'is')