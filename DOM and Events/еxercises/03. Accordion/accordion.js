function toggle() {
    let spanElement = document.querySelector('.button')
    let divExtra = document.getElementById('extra')
    if (spanElement.textContent === 'More') {
        divExtra.style.display = 'block'
        spanElement.textContent = 'Less'
    } else if (spanElement.textContent === 'Less') {
        divExtra.style.display = 'none'
        spanElement.textContent = 'More'
    }
}