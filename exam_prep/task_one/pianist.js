function pianist(data) {
    let numberOfSongs = Number(data.shift())
    let music = {}
    let counter = 0

    while (counter < numberOfSongs) {
        let musicData = data.shift().split('|')
        music[musicData[0]] = [musicData[1], musicData[2]]
        counter += 1
    }

    let commandCounter = 0
    while (true) {
        if (data[commandCounter] === 'Stop') {
            break
        } else {
            let commandData = data[commandCounter].split('|')
            let command = commandData[0]
            if (command === 'Add') {
                let song = commandData[1]
                let author = commandData[2]
                let songStyle = commandData[3]
                if (song in music) {
                    console.log(`${song} is already in the collection!`)
                } else {
                    music[song] = [author, songStyle]
                    console.log(`${song} by ${author} in ${songStyle} added to the collection!`)
                }
            } else if (command === 'Remove') {
                let songToRemove = commandData[1]
                if (songToRemove in music) {
                    delete music[songToRemove]
                    console.log(`Successfully removed ${songToRemove}!`)
                } else {
                    console.log(`Invalid operation! ${songToRemove} does not exist in the collection.`)
                }
            } else if (command === 'ChangeKey') {
                let currentSong = commandData[1]
                let songKey = commandData[2]
                if (currentSong in music) {
                    music[currentSong][1] = songKey
                    console.log(`Changed the key of ${currentSong} to ${songKey}!`)
                } else {
                    console.log(`Invalid operation! ${currentSong} does not exist in the collection.`)
                }
            }
        }
        commandCounter += 1
    }
    let musicStats = Object.entries(music)
    for (let i = 0; i < musicStats.length; i++){
        console.log(`${musicStats[i][0]} -> Composer: ${musicStats[i][1][0]}, Key: ${musicStats[i][1][1]}`)
    }
}