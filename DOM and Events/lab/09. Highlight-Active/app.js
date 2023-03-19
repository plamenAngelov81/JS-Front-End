function focused() {
    let allInputs = Array.from(document.getElementsByTagName('input'))
    for ( const input of allInputs) {
        input.addEventListener("focus", handlerFocus)
        input.addEventListener("blur", handleBlur)
    }

    function handlerFocus(event) {
        let currentEvent = event.target
        let parentDiv = currentEvent.parentElement
        parentDiv.classList.add('focused')
    }

    function  handleBlur(event) {
        let currentElement = event.target
        let parentDiv = currentElement.parentElement
        parentDiv.classList.remove('focused')
    }
}