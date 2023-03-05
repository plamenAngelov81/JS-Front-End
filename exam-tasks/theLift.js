function theLift(data) {
    let tourists = Number(data[0])
    let lift = data[1].split(' ').map(Number)
    let counter = 0
    let maxSLots = 4
    while (tourists > 0) {
        if (counter === lift.length) {
            break
        }
        let freeSlots = maxSLots - lift[counter]
        if (freeSlots > 0) {
            if (tourists > freeSlots) {
                lift[counter] += freeSlots
                tourists -= freeSlots
            } else {
                lift[counter] += tourists
                tourists = 0
            }
        }
        counter += 1
    }
    if (lift[lift.length-1] < maxSLots && tourists === 0) {
        console.log("The lift has empty spots!")
        console.log(lift.join(' '))
    } else if (lift[lift.length-1] === maxSLots && tourists > 0) {
        console.log(`There isn't enough space! ${tourists} people in a queue!`)
        console.log(lift.join(' '))
    } else if (lift[lift.length-1] === maxSLots && tourists === 0) {
        console.log(lift.join(' '))
    }
}

theLift(["20", "0 2 0"])