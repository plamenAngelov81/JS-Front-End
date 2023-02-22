function sumDigits (value) {
    let some_string = value.toString()
    let digit_sum = 0
    for (let i = 0; i<some_string.length; i++) {
        let current_num = parseInt(some_string[i])
        digit_sum += current_num
    }
    console.log(digit_sum)
}

sumDigits(245678)
sumDigits(97561)
sumDigits(543)