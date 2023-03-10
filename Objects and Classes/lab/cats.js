function cats(input) {
    class Cat {
        constructor(name, age) {
            this.name = name
            this.age = age
        }
        meow() {
             console.log(`${this.name}, age ${this.age} says Meow`)
        }

    }

    let catArr = []
    for (let line of input){
        let catData = line.split(' ')
        let catName = catData[0]
        let catAge = Number(catData[1])
        catArr.push(new Cat(catName, catAge))
    }

    for (let cat of catArr) {
        cat.meow()
    }
}

cats(['Candy 1', 'Poppy 3', 'Nyx 2'])