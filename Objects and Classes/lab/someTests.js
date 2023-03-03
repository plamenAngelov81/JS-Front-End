function someTests () {
    let myObject = {
        'name': "Plamen",
        'age': 41,
        'occupation': "Dev"
    }
    console.log(Object.values(myObject))
    console.log(Object.entries(myObject))
    console.log(Object.keys(myObject))
    console.log(Object.hasOwn(myObject, 'name'))
    delete myObject.occupation
    console.log(Object.entries(myObject))
    myObject['courses'] = ['Python', 'JS', 'HTML', 'CSS']
    console.log(Object.entries(myObject))
    myObject.age = 42
    console.log(Object.values(myObject))
}

someTests()