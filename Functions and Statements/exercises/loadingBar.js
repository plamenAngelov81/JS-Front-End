function loadingBar(number) {
    function load(num) {
        let percent = Math.floor(number / 10)
        let points = Math.floor((100 - number) / 10)

        if (points) {
            return `[${"%".repeat(percent)}${".".repeat(points)}]`
        } else {
            return `[${"%".repeat(percent)}]`
        }

    }

    if (number === 100) {
        console.log("100% Complete!")
        console.log(load(number))
    } else {
        console.log(`${number}% ${load(number)}`)
        console.log("Still loading...")
    }
}

loadingBar(100)