function multiplicationTable(value) {
    for (let i=1; i<=10; i++) {
        let result = value * i
        console.log(`${value} X ${i} = ${result}`)
    }
}

multiplicationTable(2)