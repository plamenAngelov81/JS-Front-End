function computerStore(data) {
    let customer = data.pop()
    let prices = data.map(Number)
    let totalPrice = 0
    // let totalPrice = prices.reduce(function (a, b) {return a + b})
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < 0) {
            console.log('Invalid price!')
        } else {
            totalPrice += prices[i]
        }
    }
    let fee = totalPrice * 0.2
    let bill = totalPrice + fee
    if (customer === 'special') {
        bill = bill - bill * 0.1
    }

    if (bill === 0) {
        console.log('Invalid order!')
    } else {
        console.log('Congratulations you\'ve just bought a new computer!')
        console.log(`Price without taxes: ${totalPrice.toFixed(2)}$`)
        console.log(`Taxes: ${fee.toFixed(2)}$`)
        console.log(`-----------`)
        console.log(`Total price: ${bill.toFixed(2)}$`)
    }
}

computerStore([
    'regular'
])
