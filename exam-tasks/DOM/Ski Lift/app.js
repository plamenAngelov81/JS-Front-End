window.addEventListener('load', solve);

function solve() {
    const first_name_element = document.getElementById('first-name')
    const last_name_element = document.getElementById('last-name')
    const people_count_element = document.getElementById('people-count')
    const from_date_element = document.getElementById('from-date')
    const days_count_element = document.getElementById('days-count')
    const next_btn = document.getElementById('next-btn')
    const ticket_info_element = Array.from(document.getElementsByClassName('ticket-info-list'))[0]
    const confirm_ticket_element = Array.from(document.getElementsByClassName('confirm-ticket'))[0]
    const body_element = Array.from(document.getElementsByTagName('body'))[0]

    next_btn.addEventListener('click', addPreview)

    let first_name = ''
    let last_name = ''
    let people_count = ''
    let from_date = ''
    let days_count = ''

    function addPreview(e){
        e.preventDefault()

        first_name = first_name_element.value
        last_name = last_name_element.value
        people_count = people_count_element.value
        from_date = from_date_element.value
        days_count = days_count_element.value

        // console.log(first_name, last_name)

        if (first_name === '' ||
            last_name === '' ||
            people_count === '' ||
            from_date === '' ||
            days_count === ''
        ) {
            return
        }

        let li_element = document.createElement('li')
        li_element.classList.add('ticket')

        let article_element = document.createElement('article')

        let full_name = document.createElement('h3')
        full_name.textContent = `Name: ${first_name} ${last_name}`

        let date_element = document.createElement('p')
        date_element.textContent = `From date: ${from_date}`

        let days_element = document.createElement('p')
        days_element.textContent = `For ${days_count} days`

        let people_element = document.createElement('p')
        people_element.textContent = `For ${people_count} people`

        article_element.appendChild(full_name)
        article_element.appendChild(date_element)
        article_element.appendChild(days_element)
        article_element.appendChild(people_element)

        li_element.appendChild(article_element)

        let edit_btn = document.createElement('button')
        edit_btn.classList.add('edit-btn')
        edit_btn.textContent = 'Edit'
        edit_btn.addEventListener("click", editTicket)
        li_element.appendChild(edit_btn)

        let continue_btn = document.createElement('button')
        continue_btn.classList.add('continue-btn')
        continue_btn.textContent = 'Continue'
        continue_btn.addEventListener('click', continueOrder)
        li_element.appendChild(continue_btn)

        ticket_info_element.appendChild(li_element)
        next_btn.disabled = true

        first_name_element.value = ''
        last_name_element.value = ''
        people_count_element.value = ''
        from_date_element.value = ''
        days_count_element.value = ''
    }

    function editTicket(editEvent) {
        const edit_li_element = editEvent.currentTarget.parentElement
        first_name_element.value = first_name
        last_name_element.value = last_name
        people_count_element.value = people_count
        from_date_element.value = from_date
        days_count_element.value = days_count

        next_btn.disabled = false
        edit_li_element.remove()
    }

    function continueOrder(continueEvent) {
        const continue_element = continueEvent.currentTarget.parentElement
        continue_element.lastChild.remove()
        continue_element.lastChild.remove()

        let confirm_btn = document.createElement('button')
        confirm_btn.textContent = 'Confirm'
        confirm_btn.classList.add('confirm-btn')
        confirm_btn.addEventListener('click', confirmOrder)
        continue_element.appendChild(confirm_btn)

        let cansel_btn = document.createElement('button')
        cansel_btn.classList.add('cancel-btn')
        cansel_btn.textContent = 'Cancel'
        cansel_btn.addEventListener('click', canselOrder)
        continue_element.appendChild(cansel_btn)

        confirm_ticket_element.appendChild(continue_element)

    }

    function confirmOrder() {
        let main_div = document.getElementById('main')

        main_div.remove()

        let h1 = document.createElement('h1')
        h1.id = 'thank-you'
        h1.textContent = 'Thank you, have a nice day!'

        let back_button = document.createElement('button')
        back_button.textContent = 'Back'
        back_button.id = 'back-btn'
        back_button.addEventListener("click", to_begin)

        body_element.appendChild(h1)
        body_element.appendChild(back_button)
    }

    function canselOrder(cancelEvent) {
        let cancel_element = cancelEvent.currentTarget.parentElement
        next_btn.disabled = false
        cancel_element.remove()
    }

    function to_begin() {
        window.location.reload();
    }

}


    
    
