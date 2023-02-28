function passwordGenerator(inputArr) {
    let vowels = "aeiou"
    let someStr = (inputArr[0] + inputArr[1])
    let keyWord = inputArr[2].toUpperCase()
    let counter = 0
    for (let ch of someStr) {
        if (vowels.includes(ch)) {
            someStr = someStr.replace(ch, keyWord[counter])
            counter += 1
            if (counter === keyWord.length) {
                counter = 0
            }
        }
    }
    someStr = someStr.split('').reverse().join('')
    console.log(`Your generated password is ${someStr}`)
}

passwordGenerator(['ilovepizza', 'ihatevegetables', 'orange'])

passwordGenerator(['easymoneyeazylife', 'atleasttencharacters', 'absolute'])

passwordGenerator(['areyousureaboutthisone', 'notquitebutitrustyou', 'disturbed'])