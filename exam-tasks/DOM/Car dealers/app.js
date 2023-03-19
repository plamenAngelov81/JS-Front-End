window.addEventListener("load", solve);

function solve() {
    const makeElement = document.getElementById('make')
    const modelElement = document.getElementById('model')
    const yearElement = document.getElementById('year')
    const fuelElement = document.getElementById('fuel')
    const originalCostElement = document.getElementById('original-cost')
    const sellingPriceElement = document.getElementById('selling-price')
    const publishBtn = document.getElementById('publish')
    const tableBodyElement = document.getElementById('table-body')
    const sellCarUlElement = document.getElementById('cars-list')
    const strongTotalProfitElement = document.getElementById('profit')
    let totalProfitArr = []

    let make = ''
    let model = ''
    let year = ''
    let originalCost = ''
    let fuel = ''
    let sellingPrice = ''

    publishBtn.addEventListener("click", publishCar)

    function publishCar(eventPublisher) {
        eventPublisher.preventDefault()
        make = makeElement.value
        model = modelElement.value
        year = yearElement.value
        fuel = fuelElement.value
        originalCost = originalCostElement.value
        sellingPrice = sellingPriceElement.value

        if ( make === '' &&
            model === '' &&
            year === '' &&
            fuel === '' &&
            originalCost === '' &&
            sellingPrice === '' ||
            Number(originalCost) > Number(sellingPrice)) {
            return
        }

        let trElement = document.createElement('tr')
        trElement.classList.add('row')

        let elementObj = {1: make, 2: model, 3: year, 4: fuel, 5: originalCost, 6: sellingPrice,}

        for (let i= 1; i <= 6; i++) {
            let tdElement = createSomeElement('td', elementObj[i])
            trElement.appendChild(tdElement)
        }

        let tdButtonsElement = createSomeElement('td')
        let editBtn = createButton('action-btn', 'edit', 'Edit', editCarInfo)
        let sellBtn = createButton('action-btn', 'sell', 'Sell', sellCar)
        tdButtonsElement.appendChild(editBtn)
        tdButtonsElement.appendChild(sellBtn)
        trElement.appendChild(tdButtonsElement)
        tableBodyElement.appendChild(trElement)

        makeElement.value = ''
        modelElement.value = ''
        yearElement.value = ''
        fuelElement.value = ''
        originalCostElement.value = ''
        sellingPriceElement.value = ''
    }

    function editCarInfo(editEvent) {
        let currentRow = editEvent.target.parentElement.parentElement
        let someArr = Array.from(currentRow.children)
        makeElement.value = someArr[0].textContent
        modelElement.value = someArr[1].textContent
        yearElement.value = someArr[2].textContent
        fuelElement.value = someArr[3].textContent
        originalCostElement.value = someArr[4].textContent
        sellingPriceElement.value = someArr[5].textContent

        currentRow.remove()
    }

    function sellCar(sellEvent) {
        let currentRow = sellEvent.target.parentElement.parentElement
        let someArr = Array.from(currentRow.children)
        let makeText = someArr[0].textContent
        let modelText = someArr[1].textContent
        let yearText = someArr[2].textContent
        let profit = Number(someArr[5].textContent) - Number(someArr[4].textContent)
        totalProfitArr.push(profit)

        let sellLiElement = document.createElement('li')
        sellLiElement.classList.add('each-list')

        let makeModelSpan = document.createElement('span')
        makeModelSpan.textContent = `${modelText} ${makeText}`

        let yearSpan = document.createElement('span')
        yearSpan.textContent = `${yearText}`

        let currentProfitSpan = document.createElement('span')
        currentProfitSpan.textContent = `${profit.toString()}`

        sellLiElement.appendChild(makeModelSpan)
        sellLiElement.appendChild(yearSpan)
        sellLiElement.appendChild(currentProfitSpan)

        sellCarUlElement.appendChild(sellLiElement)

        currentRow.remove()

        let totalProfit = totalProfitArr.reduce((a, b) => a + b, 0)

        strongTotalProfitElement.textContent = `${totalProfit.toFixed(2)}`
    }

    function createButton(firstClassName, secondClassName, context, eventFunction) {
        let currentBtn = document.createElement('button')
        currentBtn.classList.add(firstClassName)
        currentBtn.classList.add(secondClassName)
        currentBtn.textContent = context
        currentBtn.addEventListener("click", eventFunction)
        return currentBtn
    }

    function createSomeElement(elementType, elementTextContent) {
        let trElement = document.createElement(elementType)
        trElement.textContent = elementTextContent
        return trElement
    }
}
