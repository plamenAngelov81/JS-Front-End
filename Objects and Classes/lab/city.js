function city(cityData) {
    for (let key in cityData) {
        console.log(`${key} -> ${cityData[key]}`)
    }
}

city({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
})