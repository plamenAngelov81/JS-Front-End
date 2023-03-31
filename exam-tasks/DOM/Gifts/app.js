function solution() {
    const input = document.querySelector('input')
    const addBtn = document.querySelector('.container .card div button')
    const divContainerElement = document.getElementsByClassName('container')[0]
    const giftsSection = divContainerElement.children[1]
    const sentGiftsSection = divContainerElement.children[2]
    const discardedGiftsSection = divContainerElement.children[3]

    let gifts = Array.from(giftsSection.children)[1]
    let sentGifts = Array.from(sentGiftsSection.children)[1]
    let discardedGifts = Array.from(discardedGiftsSection.children)[1]

    addBtn.addEventListener('click', addGift)
    function addGift(e) {
        e.preventDefault()

        let sendBtn = createButton('sendButton', 'Send', moveGifts)
        let discardButton  = createButton('discardButton', 'Discard', moveGifts)

        let liElement = document.createElement('li')
        liElement.classList.add('gift')
        liElement.textContent = input.value
        liElement.appendChild(sendBtn)
        liElement.appendChild(discardButton)

        gifts.appendChild(liElement)

        Array.from(gifts.querySelectorAll('li'))
            .sort((a, b) => a.textContent.localeCompare(b.textContent))
            .forEach(item => gifts.appendChild(item));

        input.value = ''
    }

    function moveGifts(moveEvent) {

        let item = moveEvent.target.parentNode;
        item.lastElementChild.remove();
        item.lastElementChild.remove();

        if (moveEvent.target.textContent === 'Send') {
            sentGifts.appendChild(item);
        } else {
            discardedGifts.appendChild(item);
        }
    }
    function createButton(buttonClass, buttonTextContent, someFunction) {
        let currentButton = document.createElement("button")
        currentButton.classList.add(buttonClass)
        currentButton.textContent = buttonTextContent
        currentButton.addEventListener('click', someFunction)
        return currentButton
    }
}