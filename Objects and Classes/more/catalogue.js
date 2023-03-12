function catalogue(data) {
    let products = {}
    data.sort((a, b) => a.localeCompare(b))
    for (const element of data) {
        let key = element[0]
        if (!products.hasOwnProperty(key)) {
            products[key] = [element]
        } else {
            products[key].push(element)
        }
    }
    for (const item in products) {
        console.log(item)
        for (const itemElement of products[item]) {
            let someItem = itemElement.split(' : ')[0]
            let price = itemElement.split(' : ')[1]
            console.log(`  ${someItem}: ${price}`)
        }
    }
}

catalogue([
        'Appricot : 20.4',
        'Fridge : 1500',
        'TV : 1499',
        'Deodorant : 10',
        'Boiler : 300',
        'Apple : 1.25',
        'Anti-Bug Spray : 15',
        'T-Shirt : 10'
    ]
)