function leapYear(value) {
    if ((value % 4 === 0) && (value % 100 !== 0) || (value % 400 === 0)) {
        return console.log('yes')
    }
    console.log('no')
}

leapYear(4)