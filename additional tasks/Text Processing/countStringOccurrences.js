function countStringOccurrences(text, keyWord) {
    let someArr = text.split(' ')
    let counter = 0
    for (let word of someArr) {
        if (word === keyWord) {
            counter += 1
        }
    }
    console.log(counter)
}

countStringOccurrences('This is a word and it also is a sentence',
    'is')