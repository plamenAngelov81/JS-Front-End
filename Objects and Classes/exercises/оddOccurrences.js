function oddOccurrences(data) {
    let elements = data.split(' ')
    let wordsObj = {}
    let oddArr = []
    for (const element of elements) {
        let currentElement = element.toLowerCase()
        if (currentElement in wordsObj) {
            wordsObj[currentElement] += 1
        } else {
            wordsObj[currentElement] = 1
        }
    }
    for (const key in wordsObj) {
        if (wordsObj[key] % 2 !== 0) {
            oddArr.push(key)
        }
    }

    console.log(oddArr.join(' '))
}

oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')
oddOccurrences('Cake IS SWEET is Soft CAKE sweet Food')