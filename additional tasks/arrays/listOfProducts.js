function listOfProducts(products) {
    products.sort()

    let counter = 1
    for (let product of products) {
        console.log(`${counter}.${product}`)
        counter += 1
    }
}

listOfProducts(['Potatoes', 'Tomatoes', 'Onions', 'Apples'])