function extractFile(input) {
    let path = input.split('\\')
    let file = path[path.length - 1]

    let index = file.lastIndexOf('.')

    let fileName = file.substring(0, index)
    let extension = file.substring(index + 1)


    console.log(`File name: ${fileName}`)
    console.log(`File extension: ${extension}`)
}

extractFile('C:\\Internal\\training-internal\\Template.pptx')