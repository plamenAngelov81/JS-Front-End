function sequences(data) {
    let someSet = new Set()
    for (const line of data) {
        let element = JSON.parse(line)
        element.sort((a, b) => b - a)
        element = element.toString()
        someSet.add(element)
    }
    let iterators = someSet.entries()

    let someArr = []
    for (const iterator of iterators) {
        let currentItem = iterator[0].split(',').map(Number)
        someArr.push(currentItem)
    }
    someArr.sort((a, b) => a.length - b.length)
    for (const someArrElement of someArr) {
        console.log(`[${someArrElement.join(', ')}]`)
    }
}


sequences(["[-3, -2, -1, 0, 1, 2, 3, 4]",
    "[10, 1, -17, 0, 2, 13]",
    "[4, -3, 3, -2, 2, -1, 1, 0]"])