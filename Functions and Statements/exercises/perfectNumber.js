function perfNum(number) {
    let numSum = 0
    for (let i = 1; i < number; i++) {
        if (number % i === 0) {
            numSum += i
        }
    }

    if (numSum === number) {
        console.log("We have a perfect number!")
    } else {
        console.log("It's not so perfect.")
    }
}

perfNum(28)