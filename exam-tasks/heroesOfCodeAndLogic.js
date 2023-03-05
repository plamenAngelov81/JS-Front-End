function heroesOfCodeAndLogic(data) {
    let numberOfHeroes = Number(data.shift())
    let heroes = {}

    for (let i = 0; i < numberOfHeroes; i++) {
        let heroData = data.shift().split(' ')
        let heroName = heroData[0]
        let hp = Number(heroData[1])
        let mp = Number(heroData[2])
        heroes[heroName] = [hp, mp]
    }

    for (let i = 0; i < data.length - 1; i++) {
        let commandData = data[i].split(' - ')
        let command = commandData[0]
        if (command === 'CastSpell') {
            let hero = commandData[1]
            let mpNeed = Number(commandData[2])
            let spellName = commandData[3]
            if (heroes[hero][1] >= mpNeed) {
                heroes[hero][1] -= mpNeed
                console.log(`${hero} has successfully cast ${spellName} and now has ${heroes[hero][1]} MP!`)
            } else {
                console.log(`${hero} does not have enough MP to cast ${spellName}!`)
            }
        } else if (command === 'TakeDamage') { //– {hero name} – {damage} – {attacker}"
            let currentHero = commandData[1]
            let damage = Number(commandData[2])
            let attacker = commandData[3]
            let result = heroes[currentHero][0] - damage
            if (result > 0) {
                heroes[currentHero][0] = result
                console.log(`${currentHero} was hit for ${damage} HP by ${attacker} and now has ${result} HP left!`)
            } else {
                delete heroes[currentHero]
                console.log(`${currentHero} has been killed by ${attacker}!`)
            }
        } else if (command === 'Recharge') {
            let hero = commandData[1]
            let rechargeMp = Number(commandData[2])
            let neededMp = 200 - heroes[hero][1]
            if (neededMp >= rechargeMp) {
                heroes[hero][1] += rechargeMp
                console.log(`${hero} recharged for ${rechargeMp} MP!`)
            } else {
                heroes[hero][1] += neededMp
                console.log(`${hero} recharged for ${neededMp} MP!`)
            }
        } else if (command === 'Heal') {
            let hero = commandData[1]
            let healedHp = Number(commandData[2])
            let neededHp = 100 - heroes[hero][0]
            if (neededHp >= healedHp) {
                heroes[hero][0] += healedHp
                console.log(`${hero} healed for ${healedHp} HP!`)
            } else {
                heroes[hero][0] += neededHp
                console.log(`${hero} healed for ${neededHp} HP!`)
            }
        }
    }

    let finalHeroes = Object.entries(heroes)
    let counter = 0
    for (let j = 0; j < finalHeroes.length; j++) {
        console.log(finalHeroes[j][0])
        for (let k = 0; k < finalHeroes[j][1].length; k++) {
            if (counter === 1) {
                counter = 0
                break
            }
            console.log(` HP: ${finalHeroes[j][1][0]}`)
            console.log(` MP: ${finalHeroes[j][1][1]}`)
            counter += 1
        }
    }
}

heroesOfCodeAndLogic(['4',
    'Adela 90 150',
    'SirMullich 70 40',
    'Ivor 1 111',
    'Tyris 94 61',
    'Heal - SirMullich - 50',
    'Recharge - Adela - 100',
    'CastSpell - Tyris - 1000 - Fireball',
    'TakeDamage - Tyris - 99 - Fireball',
    'TakeDamage - Ivor - 3 - Mosquito',
    'End'
])