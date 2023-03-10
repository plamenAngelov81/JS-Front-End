function inventory(data) {
    class Hero {
        constructor(name, level, items) {
            this.name = name
            this.level = level
            this.items = items
        }
        getHeroInfo() {
            console.log(`Hero: ${this.name}\nlevel => ${this.level}\nitems => ${this.items}`)
        }
    }
    let heroes = []
    while (data.length > 0) {
        let heroData = data.shift().split(' / ')
        let heroName = heroData[0]
        let heroLevel = Number(heroData[1])
        let heroInventory = heroData[2]
        let newHero = new Hero(heroName, heroLevel, heroInventory)
        heroes.push(newHero)
    }
    heroes.sort((a, b) => a.level - b.level)
    for (const hero of heroes) {
        hero.getHeroInfo()
    }
}

inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
])

