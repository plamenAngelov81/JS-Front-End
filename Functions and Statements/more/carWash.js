function carWash(cleaners) {
    let total = 0
    for (let cleaner of cleaners) {
        if  (cleaner === "soap") {
            total += 10
        } else if (cleaner === 'water') {
            total = total + total *  0.2
        } else if (cleaner === 'vacuum cleaner') {
            total = total + total * 0.25
        } else if (cleaner === 'mud') {
            total = total - total * 0.1
        }
    }
    console.log(`The car is ${total.toFixed(2)}% clean.`)
}

carWash(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"])