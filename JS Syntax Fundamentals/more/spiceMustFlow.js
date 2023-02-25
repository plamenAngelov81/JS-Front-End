function spiceMustFlow(input) {
    let spice = Number(input)
    let total = 0
    let workersConsume = 26
    let days = 0
    while (true) {
        if (spice < 100) {
            total -= workersConsume
            if (total < 0) {
                total = 0
            }
            break
        }
        let minedSpace = spice - workersConsume
        total += minedSpace
        days += 1
        spice -= 10
    }
    console.log(days)
    console.log(total)
}


// spiceMustFlow(111)
spiceMustFlow(50)