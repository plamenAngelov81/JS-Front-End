function areDigitsSame(num) {
    let str = num.toString();
    let firstChar = str[0];
    let digit_sum = 0
    let is_true = true
    for (let i = 1; i < str.length; i++) {
        if (str[i] !== firstChar) {
            is_true = false;
            break;
        }
    }
    for (let i = 0; i < str.length; i++) {
        digit_sum += parseInt(str[i])
    }
    if (is_true) {
        console.log('true')
    } else {
        console.log('false')
    }

    console.log(digit_sum)
}

areDigitsSame(1234)