function towns(townData) {
    class Town {
        constructor(name, latitude, longitude) {
            this.name = name
            this.latitude = latitude
            this.longitude = longitude
        }
        getInfo() {
            console.log(`{ town: '${this.name}', latitude: '${this.latitude}', longitude: '${this.longitude}' }`)
        }
    }
    for (let i = 0; i < townData.length; i++) {
        let currentData =  townData[i].split(' | ')
        let townName = currentData[0]
        let currentLatitude = Number(currentData[1]).toFixed(2)
        let currentLongitude = Number(currentData[2]).toFixed(2)
        let newTown = new Town(townName, currentLatitude, currentLongitude)
        newTown.getInfo()
    }
}

towns(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']
)