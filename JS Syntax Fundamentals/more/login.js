function login(someArr) {
    let userName = someArr[0]
    let counter = 0
    for (let i = 1; i < someArr.length; i++) {
        counter += 1
        let currentPass = someArr[i].split("").reverse().join("")
        if (userName === currentPass) {
            return console.log(`User ${userName} logged in.`)
        } else {
            if (counter === 4) {
                return console.log(`User ${userName} blocked!`)
            }
            console.log("Incorrect password. Try again.")
        }

    }
}

//login(['sunny','rainy','cloudy','sunny','not sunny'])
login(['Acer','login','go','let me in','recA'])