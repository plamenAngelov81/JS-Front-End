function cutAndReverse(string) {
    let index = string.length / 2
    let firstStr = string.substring(0, index)
    let secondStr = string.substring(index)

    let reversedFirst = firstStr.split('').reverse().join('')
    let reversedSecond = secondStr.split('').reverse().join('')

    console.log(reversedFirst)
    console.log(reversedSecond)
}

cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT')