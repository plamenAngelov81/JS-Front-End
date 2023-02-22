function ages(value) {
    if (0 <= value && value <= 2) {
        console.log('baby')
    } else if (3 <= value && value <= 13) {
        console.log('child')
    }else if (14 <= value && value <= 19) {
        console.log('teenager')
    } else if (20 <= value && value <= 65) {
        console.log('adult')
    } else if (value >= 66) {
        console.log('elder')
    } else {
        console.log('out of bounds')
    }
    console.log()
}

ages(14)
