function someMatrix(number) {
    let matrix = []
    for (let i = 0; i < number; i++) {
        let row = []
        for (let j = 0; j < number; j++) {
            row.push(number)
        }
        matrix.push(row)
    }

    for (let k of matrix) {
        console.log(k.join(' '))
    }
}

someMatrix(3)