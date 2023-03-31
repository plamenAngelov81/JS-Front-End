window.addEventListener('load', solve);

function solve() {
    const productTypeElement = document.getElementById('type-product')
    const descriptionElement = document.getElementById('description')
    const clientNameElement = document.getElementById('client-name')
    const clientPhoneElement = document.getElementById('client-phone')
    const sendBtn = document.querySelector('form button')
    const receivedOrdersElement = document.getElementById('received-orders')
    const completedOrdersElement = document.getElementById('completed-orders')
    const clearBtn = Array.from(document.getElementsByClassName('clear-btn'))[0]

    sendBtn.addEventListener('click', sendInfo)
    clearBtn.addEventListener('click', clearOrders)

    function sendInfo(e) {
        e.preventDefault()

        let product = productTypeElement.value
        let description = descriptionElement.value
        let name = clientNameElement.value
        let phone = clientPhoneElement.value

        if (description === '' || name === '' || phone === '') {
            return
        }

        let h2Element = document.createElement('h2')
        h2Element.textContent = `Product type for repair: ${product}`

        let h3Element = document.createElement('h3')
        h3Element.textContent = `Client information: ${name}, ${phone}`

        let h4Element = document.createElement('h4')
        h4Element.textContent = `Description of the problem: ${description}`

        let startRepairBtn = document.createElement('button')
        startRepairBtn.classList.add('start-btn')
        startRepairBtn.textContent = 'Start repair'
        startRepairBtn.addEventListener('click', startRepair)

        let finishRepairBtn = document.createElement('button')
        finishRepairBtn.classList.add('finish-btn')
        finishRepairBtn.textContent = 'Finish repair'
        finishRepairBtn.disabled = true
        finishRepairBtn.addEventListener("click", finishRepair)

        let divElement = document.createElement('div')
        divElement.classList.add('container')

        divElement.appendChild(h2Element)
        divElement.appendChild(h3Element)
        divElement.appendChild(h4Element)
        divElement.appendChild(startRepairBtn)
        divElement.appendChild(finishRepairBtn)

        receivedOrdersElement.appendChild(divElement)

        descriptionElement.value = ''
        clientNameElement.value = ''
        clientPhoneElement.value = ''
    }

    function startRepair(repairEvent) {
        let eventParentElement = repairEvent.currentTarget.parentElement
        let currentElementsArr = Array.from(eventParentElement.children)
        currentElementsArr[3].disabled = true
        currentElementsArr[4].disabled = false
    }

    function finishRepair(finishEvent) {
        let finishParentElement = finishEvent.currentTarget.parentElement
        let currentElementsArr = Array.from(finishParentElement.children)
        finishParentElement.removeChild(currentElementsArr[3])
        finishParentElement.removeChild(currentElementsArr[4])
        completedOrdersElement.appendChild(finishParentElement)
    }

    function clearOrders(clearEvent) {
        let section = clearEvent.currentTarget.parentElement
        Array.from(section.querySelectorAll('div')).forEach(el => el.remove())
    }
}