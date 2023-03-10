function songs(songData) {
    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList
            this.name = name
            this.time = time
        }
    }
    let numberOfSongs = Number(songData.shift())
    let collectionType = songData.pop()

    let songsCollection = []
    for (let i = 0; i < numberOfSongs; i++) {
        let line = songData[i].split('_')
        let currentTypeList = line[0]
        let songName = line[1]
        let songTime = line[0]
        let newSong = new Song(currentTypeList, songName, songTime)
        songsCollection.push(newSong)
    }

    if (collectionType === "all") {
        for (let song of songsCollection) {
            console.log(song.name)
        }
    } else {
        for (let song of songsCollection) {
            if(song.typeList === collectionType){
                console.log(song.name)
            }
        }
    }
}

songs([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite'])