function movies(data) {
    class Movie {
        constructor(movieName, director, date) {
            this.name = movieName
            this.director = director
            this.date = date
        }
    }

    function getMovieIndex(someName, someArr) {
        for (let i = 0; i < someArr.length; i++) {
            if (someArr[i].name === someName) {
                return i
            }
        }
        return NaN
    }

    let moviesArr = []
    for (let line of data){
        if (line.startsWith("addMovie")) {
            let currentName = line.split('addMovie ')[1]
            let newMovie = new Movie(currentName, '', '')
            moviesArr.push(newMovie)
        } else if (line.includes('directedBy')) {
            let movieDirectorData = line.split(' directedBy ')
            let currentMovieName = movieDirectorData[0]
            let currentMovieDirector = movieDirectorData[1]

            let index = getMovieIndex(currentMovieName, moviesArr)
            if (index || index === 0) {
                moviesArr[index].director = currentMovieDirector
            }
        } else if (line.includes('onDate')) {
            let dateData = line.split(' onDate ')
            let currentMovieName = dateData[0]
            let currentDate = dateData[1]
            let dateIndex = getMovieIndex(currentMovieName, moviesArr)
            if (dateIndex || dateIndex === 0) {
                moviesArr[dateIndex].date = currentDate
            }
        }
    }

    for (let k = 0; k < moviesArr.length; k++) {
        if (moviesArr[k].name !== "" && moviesArr[k].director !== "" && moviesArr[k] !== "") {
            let movieJSON = JSON.stringify(moviesArr[k])
            console.log(movieJSON)
        }
    }
}

movies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
])