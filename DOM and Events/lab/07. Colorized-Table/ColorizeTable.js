function colorize() {
    let tableElements = Array.from(document.querySelectorAll("table tr" ))
    for (let i = 0; i < tableElements.length; i++) {
        if (i % 2 !== 0) {
            tableElements[i].style.backgroundColor = 'Teal'
        }
    }
}