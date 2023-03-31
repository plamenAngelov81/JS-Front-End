window.addEventListener('load', solution);

function solution() {
    const personInfo = {
        fullName: () => document.getElementById('fname'),
        personEmail: () => document.getElementById('email'),
        personPhoneNum: () => document.getElementById('phone'),
        personAddress: () => document.getElementById('address'),
        personPostalCode: () => document.getElementById('code'),
    }
    const ulElement = document.getElementById('infoPreview')
    const blockDivElement = document.getElementById('block')
    const submitBtn = document.getElementById('submitBTN')
    const editBtn = document.getElementById('editBTN')
    const continueBtn = document.getElementById('continueBTN')

    submitBtn.addEventListener('click', submitPersonInfo)
    editBtn.addEventListener('click', editPersonInfo)
    continueBtn.addEventListener('click', continueReservation)

    let name = ''
    let email = ''
    let phoneNumber = ''
    let address = ''
    let code = ''

    function submitPersonInfo(e) {
        e.preventDefault()

        name = personInfo.fullName().value
        email = personInfo.personEmail().value
        phoneNumber = personInfo.personPhoneNum().value
        address = personInfo.personAddress().value
        code = personInfo.personPostalCode().value

        if(name === '' || email === '') {return}

        let fullNameLi = document.createElement('li')
        fullNameLi.textContent = `Full Name: ${name}`
        ulElement.appendChild(fullNameLi)

        let emailLi = document.createElement('li')
        emailLi.textContent = `Email: ${email}`
        ulElement.appendChild(emailLi)

        let phoneNumLi = document.createElement('li')
        phoneNumLi.textContent = `Phone Number: ${phoneNumber}`
        ulElement.appendChild(phoneNumLi)

        let addressLi = document.createElement('li')
        addressLi.textContent = `Address: ${address}`
        ulElement.appendChild(addressLi)

        let codeLi = document.createElement('li')
        codeLi.textContent = `Postal Code: ${code}`
        ulElement.appendChild(codeLi)

        submitBtn.disabled = true
        editBtn.disabled = false
        continueBtn.disabled = false

        personInfo.fullName().value = ''
        personInfo.personEmail().value = ''
        personInfo.personPhoneNum().value = ''
        personInfo.personAddress().value = ''
        personInfo.personPostalCode().value = ''
    }

    function editPersonInfo() {
        personInfo.fullName().value = name
        personInfo.personEmail().value = email
        personInfo.personPhoneNum().value = phoneNumber
        personInfo.personAddress().value = address
        personInfo.personPostalCode().value = code

        submitBtn.disabled = false
        editBtn.disabled = true
        continueBtn.disabled = true

        let elementsToRemove = Array.from(ulElement.children)
        elementsToRemove.forEach(element => element.remove())
    }

    function continueReservation() {
        let someElements = Array.from(blockDivElement.childNodes)
        someElements.forEach(currentElement => currentElement.remove())

        let h3Element = document.createElement('h3')
        h3Element.textContent = 'Thank you for your reservation!'
        blockDivElement.appendChild(h3Element)
    }

}