function employees(data) {
    let employeesObj = {}
    let workers = []
    for (let i = 0; i < data.length; i++) {
        let employee = data[i]
        workers.push(employee)
        employeesObj[employee] = data[i].length
    }
    for (let j = 0; j < workers.length; j++) {
        let name = workers[j]
        console.log(`Name: ${name} -- Personal Number: ${employeesObj[name]}`)
    }
}

employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
])