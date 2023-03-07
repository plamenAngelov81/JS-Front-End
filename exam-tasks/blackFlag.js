function blackFlag(data) {
    let days = Number(data.shift())
    let loot_per_day = Number(data.shift())
    let target_loot = Number(data.shift())

    let collected_loot = 0

    for (let day = 1; day <= days; day++) {
        collected_loot += loot_per_day
        if (day %  3 === 0)
            collected_loot += loot_per_day * 0.5
        if (day % 5 === 0)
            collected_loot -= collected_loot * 0.3
    }
    let percent = collected_loot / target_loot * 100
    if (collected_loot >= target_loot)
        console.log(`Ahoy! ${collected_loot.toFixed(2)} plunder gained.`)
    else
        console.log(`Collected only ${percent.toFixed(2)}% of the plunder.`)
}

blackFlag(["5",
    "40",
    "100"])