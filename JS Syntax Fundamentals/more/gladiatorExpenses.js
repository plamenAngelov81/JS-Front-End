function gladiatorExpenses(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let aureus = 0
    let broken_shield = 0

    for (let i = 1; i <= lostFights; i++) {
        if (i % 2 === 0) {
            aureus += helmetPrice
        }

        if (i % 3 === 0) {
            aureus += swordPrice
            if (i % 2 === 0) {
                aureus += shieldPrice
                broken_shield += 1
                if ( broken_shield === 2) {
                    aureus += armorPrice
                    broken_shield = 0
                }
            }
        }
    }
    console.log(`Gladiator expenses: ${aureus.toFixed(2)} aureus`)
}

gladiatorExpenses(7,
    2,
    3,
    4,
    5)

gladiatorExpenses(23,
    12.50,
    21.50,
    40,
    200)
