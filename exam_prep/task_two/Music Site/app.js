window.addEventListener('load', solve);

function solve() {
    let song = {
        songGenre: () => document.getElementById('genre'),
        songName: () => document.getElementById('name'),
        songAuthor: () => document.getElementById('author'),
        songPublishDate: () => document.getElementById('date'),
    }
    let totalLikes = 0
    const addBtn = document.getElementById('add-btn')
    const likeParagraph = document.querySelector('#total-likes .likes p')
    const savedContainer = Array.from(document.getElementsByClassName('saved-container'))[0]
    const allHitsContainer = Array.from(document.getElementsByClassName('all-hits-container'))[0]

    addBtn.addEventListener('click', addSong)

    let genre = ''
    let name = ''
    let author = ''
    let publishDate = ''

    function addSong(e) {
        e.preventDefault()

        genre = song.songGenre().value
        name = song.songName().value
        author = song.songAuthor().value
        publishDate = song.songPublishDate().value

        if (genre === '' ||
            name === '' ||
            author === '' ||
            publishDate === '') {
            return
        }

        let divInfo = document.createElement('div')
        divInfo.classList.add('hits-info')

        let imgElement = document.createElement('img')
        imgElement.src = './static/img/img.png'
        divInfo.appendChild(imgElement)

        let genreH2 = document.createElement('h2')
        genreH2.textContent = `Genre: ${genre}`
        divInfo.appendChild(genreH2)

        let nameH2 = document.createElement('h2')
        nameH2.textContent = `Name: ${name}`
        divInfo.appendChild(nameH2)

        let authorH2 = document.createElement('h2')
        authorH2.textContent = `Author: ${author}`
        divInfo.appendChild(authorH2)

        let dateH3 = document.createElement('h3')
        dateH3.textContent = `Date: ${publishDate}`
        divInfo.appendChild(dateH3)

        let saveBtn = createButton('save-btn', 'Save song', saveSong)
        let likeBtn = createButton('like-btn', 'Like song', likeSong)
        let deleteBtn = createButton('delete-btn', 'Delete', deleteSong)
        divInfo.appendChild(saveBtn)
        divInfo.appendChild(likeBtn)
        divInfo.appendChild(deleteBtn)
        allHitsContainer.appendChild(divInfo)

        song.songGenre().value = ''
        song.songName().value = ''
        song.songAuthor().value = ''
        song.songPublishDate().value = ''
    }

    function saveSong(saveEvent) {
        let parentDivElement = saveEvent.currentTarget.parentElement
        Array.from(parentDivElement.querySelectorAll('button')).forEach(el => el.remove())
        let deleteBtn = createButton('delete-btn', 'Delete', deleteSong)
        parentDivElement.appendChild(deleteBtn)
        savedContainer.appendChild(parentDivElement)
    }

    function likeSong(likeEvent) {
        let likeElement = likeEvent.currentTarget
        totalLikes += 1
        likeElement.disabled = true
        console.log(likeParagraph)
        likeParagraph.textContent = `Total Likes: ${totalLikes}`

    }

    function deleteSong(deleteEvent) {
        let deleteElement = deleteEvent.currentTarget.parentElement
        deleteElement.remove()
    }

    function createButton(someClass, someContent, eventFunction) {
        let btn = document.createElement("button")
        btn.classList.add(someClass)
        btn.textContent = someContent
        btn.addEventListener("click", eventFunction)
        return btn
    }
}