function substring(str, startIndex, count) {
    str = str.substring(startIndex, count + startIndex)
    console.log(str)
}

substring('ASentence', 1, 8)