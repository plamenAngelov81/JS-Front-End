function meetings(data) {
    let schedule = {}
    let counter = 0
    while (data.length > 0) {
        let meetData = data.shift().split(' ')
        let day = meetData[0]
        let name = meetData[1]
        if (day in schedule) {
            console.log(`Conflict on ${day}!`)
        } else {
            schedule[day] = name
            console.log(`Scheduled for ${day}`)
        }
        counter += 1
    }
    let days = Object.keys(schedule)
    for (const day of days) {
        console.log(`${day} -> ${schedule[day]}`)
    }
}

meetings(['Friday Bob',
    'Saturday Ted',
    'Monday Bill',
    'Monday John',
    'Wednesday George'])