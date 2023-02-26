function buildWall(input) {
    let totalMoney = 0
    let isReady = false
    let totalConcrete = []
    while (true) {
        let concretePerDay = 0
        for (let i = 0; i < input.length; i++) {
            let currentConcrete = 0
            if (input[i] < 30) {
                input[i] += 1
                currentConcrete += 195
                let neededMoney = 195 * 1900
                totalMoney += neededMoney
            }
            concretePerDay += currentConcrete
        }
        totalConcrete.push(concretePerDay)

        for (let j = 0; j < input.length; j++) {
            if (input[j] < 30) {
                isReady = false
                break
            } else {
                isReady = true
            }
        }
        if (isReady) {
            break
        }
    }
    console.log(totalConcrete.join(', '))
    console.log(`${totalMoney} pesos`)
}

//buildWall([17])
//buildWall([21, 25, 28])
buildWall([17, 22, 17, 19, 17])