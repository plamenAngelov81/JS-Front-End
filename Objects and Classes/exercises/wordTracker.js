function wordTracker(data) {
    let words = data.shift().split(' ')
    let counterWords = {}
    for (const word of words) {
        let counter = data.filter(someWord => someWord === word).length
        counterWords[word] = counter
    }
    let wordArr = Object.entries(counterWords)

    let sortedWords = wordArr.sort((a, b) => {
        let [nameA, countA] = a
        let [nameB, countB] = b
        return countB - countA
    })

    for (const word of sortedWords) {
        console.log(`${word[0]} - ${word[1]}`)
    }
}
//
// wordTracker([
//     'this sentence',
//     'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
// ])

wordTracker([
    'is the',
    'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence'])