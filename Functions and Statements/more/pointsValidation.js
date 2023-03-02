function pointsValidation (coordinates) {
    function getDistance(p1, m1, p2 ,m2) {
        return Math.sqrt((p2 - p1) ** 2 + (m2 - m1) ** 2)
    }

    let x1 = coordinates[0]
    let y1 = coordinates[1]
    let x2 = coordinates[2]
    let y2 = coordinates[3]

    let firstPointDistanceToZero = getDistance(x1, y1, 0, 0)
    let secondPointDistanceToZero = getDistance(x2, y2, 0, 0)
    let distanceFirstSecondPoint = getDistance(x1, y1, x2, y2)

    if (Number.isInteger(firstPointDistanceToZero)){
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`)
    } else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`)
    }

    if (Number.isInteger(secondPointDistanceToZero)){
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`)
    } else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`)
    }

    if (Number.isInteger(distanceFirstSecondPoint)){
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`)
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`)
    }
}

pointsValidation([3, 0, 0, 4])