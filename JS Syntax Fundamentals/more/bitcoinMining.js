function bitcoinMining(someArr) {
    let day = 1
    let bitCoins = 0
    let firstBitCoinDay = 0
    let totalMoney = 0
    let bitCoinPrice = 11949.16
    for (let i = 0; i < someArr.length; i++) {
        let gold = someArr[i]
        if (day % 3 === 0) {
            gold = gold - gold * 0.3
        }
        totalMoney = totalMoney + gold * 67.51
        while (totalMoney >= bitCoinPrice) {
            let bitCoinsPerDay = Math.floor(totalMoney / bitCoinPrice)
            bitCoins += bitCoinsPerDay
            totalMoney = totalMoney - bitCoinsPerDay * bitCoinPrice
            if (firstBitCoinDay === 0) {
                firstBitCoinDay = day
            }
        }
        day += 1
    }
    console.log(`Bought bitcoins: ${bitCoins}`)
    if (firstBitCoinDay > 0) {
        console.log(`Day of the first purchased bitcoin: ${firstBitCoinDay}`)
    }
    console.log(`Left money: ${totalMoney.toFixed(2)} lv.`)
}


//bitcoinMining([100, 200, 300])
//bitcoinMining([50, 100])
bitcoinMining([3124.15, 504.212, 2511.124])