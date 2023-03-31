window.addEventListener('load', solve);

function solve() {
    const furniture = {
        modelFurniture: () => document.getElementById('model'),
        yearFurniture: () => document.getElementById('year'),
        descriptionFurniture: () => document.getElementById('description'),
        priceFurniture: () => document.getElementById('price'),
    }
    const addBtn = document.getElementById('add')
    const tbodyFurnitureList = document.getElementById('furniture-list')

    addBtn.addEventListener('click', addFurniture)

    let totalProfit = 0

    function addFurniture(e) {
        e.preventDefault()
        let model = furniture.modelFurniture().value
        let year = furniture.yearFurniture().value
        let description = furniture.descriptionFurniture().value
        let price = furniture.priceFurniture().value

        if (model === '' || year === '' || description === '' || price === '') {
            return
        }

        if (Number(year) < 0 || Number(price) < 0) {
            return;
        }

        let trFurnitureInfo = document.createElement('tr')
        trFurnitureInfo.classList.add('info')

        let tdModel = document.createElement('td')
        tdModel.textContent = model
        trFurnitureInfo.appendChild(tdModel)

        let tdPrice = document.createElement('td')
        tdPrice.textContent = `${Number(price).toFixed(2)}`
        trFurnitureInfo.appendChild(tdPrice)

        let tdButtons = document.createElement("td")

        let moreBtn = document.createElement('button')
        moreBtn.classList.add('moreBtn')
        moreBtn.textContent = 'More Info'
        moreBtn.addEventListener('click', moreLessInfo)
        tdButtons.appendChild(moreBtn)

        let buyBtn = document.createElement('button')
        buyBtn.classList.add('buyBtn')
        buyBtn.textContent = 'Buy it'
        buyBtn.addEventListener('click', buyItem)
        tdButtons.appendChild(buyBtn)

        trFurnitureInfo.appendChild(tdModel)
        trFurnitureInfo.appendChild(tdPrice)
        trFurnitureInfo.appendChild(tdButtons)

        let trHide = document.createElement('tr')
        trHide.classList.add('hide')

        let tdYear = document.createElement('td')
        tdYear.textContent = `Year: ${year}`
        trHide.appendChild(tdYear)

        let tdDescription = document.createElement('td')
        tdDescription.textContent = `Description: ${description}`
        tdDescription.colSpan = 3
        trHide.appendChild(tdDescription)

        tbodyFurnitureList.appendChild(trFurnitureInfo)
        tbodyFurnitureList.appendChild(trHide)

        furniture.modelFurniture().value = ''
        furniture.yearFurniture().value = ''
        furniture.descriptionFurniture().value = ''
        furniture.priceFurniture().value = ''
    }

    function moreLessInfo(moreLessEvent) {
        let hiddenTr = this.parentElement.parentElement.parentElement.getElementsByClassName('hide')[0];

        if (this.textContent === 'More Info') {
            hiddenTr.style.display = 'contents';
            this.textContent = 'Less Info';
        } else if (this.textContent === 'Less Info') {
            hiddenTr.style.display = 'none';
            this.textContent = 'More Info';
        }
    }

    function buyItem() {
        let elmToRemove = this.parentElement.parentElement;
        let secondElmToRemove = elmToRemove.parentElement.getElementsByClassName('hide')[0];

        totalProfit += Number(elmToRemove.children[1].textContent);

        let totalElm = document.querySelector('td[class="total-price"]');
        totalElm.textContent = totalProfit.toFixed(2);

        secondElmToRemove.remove();
        elmToRemove.remove();
    }
}
