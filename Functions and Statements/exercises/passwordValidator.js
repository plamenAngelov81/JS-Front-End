function passwordValidator(password) {
    let pass_len = false
    let pass_letter_digit = false
    let pass_digit_sum = false

    if (6 <= password.length && password.length <= 10) {
        pass_len = true
    } else {
        console.log("Password must be between 6 and 10 characters")
    }

    for (let i of password) {
        let someString = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
        if (!someString.includes(i)) {
            pass_letter_digit = false
            console.log("Password must consist only of letters and digits")
            break
        } else {
            pass_letter_digit = true
        }
    }

    let counter = 0
    let numbers = '1234567890'
    for (let j of password)
        if (numbers.includes(j))
            counter += 1

    if (counter < 2)
        console.log("Password must have at least 2 digits")
    else {
        pass_digit_sum = true
    }

    if (pass_digit_sum && pass_len && pass_letter_digit) {
        console.log("Password is valid")
    }
}

passwordValidator('MyPass123')