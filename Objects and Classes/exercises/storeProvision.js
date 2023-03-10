function storeProvision(local, delivery) {
    let storage = {}

    for (let i = 0; i < local.length; i += 2) {
        let product = local[i]
        let quantity = Number(local[i + 1])
        storage[product] = quantity
    }

    for (let j = 0; j < delivery.length; j += 2) {
        let currentProduct = delivery[j]
        let currentQuantity = Number(delivery[j + 1])
        if (currentProduct in storage) {
            storage[currentProduct] += currentQuantity
        } else {
            storage[currentProduct] = currentQuantity
        }
    }
    let products = Object.keys(storage)
    for (let item of products) {
        console.log(`${item} -> ${storage[item]}`)
    }
}

// storeProvision([
//         'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
//     ],
//     [
//         'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
//     ]
// )

storeProvision([
        'Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5'
    ],
    [
        'Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30'
    ])