function grocery_store() {
    let base_url = 'http://localhost:3030/jsonstore/grocery/'
    const load_btn = document.getElementById('load-product')
    const table_body_element = document.getElementById('tbody')
    const add_btn = document.getElementById('add-product')
    const product_input = document.getElementById('product')
    const count_input = document.getElementById('count')
    const price_input = document.getElementById('price')
    const update_btn = document.getElementById('update-product')
    //const form_element = document.getElementById('list')

    load_btn.addEventListener("click", load_products)
    add_btn.addEventListener('click', add_products)

    function load_products(e) {
        if (e) {
            e.preventDefault();
        }
        table_body_element.innerHTML = ''
        fetch(base_url)
            .then((res) => res.json())
            .then((data) => {
                let items = Object.values(data)
                for (const item of items) {
                    let product = item.product
                    let count = item.count
                    let price = item.price
                    let id =item._id

                    let tr = document.createElement('tr')

                    let name_td = document.createElement('td')
                    name_td.classList.add('name')
                    name_td.textContent = product

                    let count_td = document.createElement('td')
                    count_td.classList.add('count-product')
                    count_td.textContent = count

                    let price_td = document.createElement('td')
                    price_td.classList.add('product-price')
                    price_td.textContent = price

                    let btn_td = document.createElement('td')

                    let update_btn = document.createElement('button')
                    update_btn.classList.add('update')
                    update_btn.textContent = 'Update'
                    update_btn.id = id
                    update_btn.addEventListener("click", update_product)
                    btn_td.appendChild(update_btn)

                    let delete_btn = document.createElement('button')
                    delete_btn.classList.add('delete')
                    delete_btn.textContent = 'Delete'
                    delete_btn.id = id
                    delete_btn.addEventListener("click", delete_product)
                    btn_td.appendChild(delete_btn)

                    tr.appendChild(name_td)
                    tr.appendChild(count_td)
                    tr.appendChild(price_td)
                    tr.appendChild(btn_td)

                    table_body_element.appendChild(tr)
                }
            })
    }

    function add_products(e) {
        e.preventDefault()

        let product = product_input.value
        let count = count_input.value
        let price = price_input.value

        let http_headers = {
            method: "POST",
            body: JSON.stringify({product, count, price})
        }

        fetch(base_url, http_headers)
            .then(() => {
                load_products()
            })
        product_input.value = ''
        count_input.value = ''
        price_input.value = ''
    }

    function delete_product(deleteEvent) {
        let delete_id = deleteEvent.currentTarget.id
        let delete_url = `${base_url}${delete_id}`

        let delete_headers = {
            method: "DELETE",
        }

        fetch(delete_url, delete_headers)
            .then(() => {
                load_products()
            })
    }

    function update_product(updateEvent) {
        let update_id = updateEvent.currentTarget.id
        let update_url = `${base_url}${update_id}`
        add_btn.disabled = true
        update_btn.disabled = false
        const current_tr = updateEvent.currentTarget.parentElement.parentElement
        let product_stats_arr = Array.from(current_tr.children)
        let name = product_stats_arr[0].textContent
        let count = product_stats_arr[1].textContent
        let price = product_stats_arr[2].textContent

        product_input.value = name
        count_input.value = count
        price_input.value = price

        update_btn.addEventListener("click", () => {
            let http_header_update = {
                method: "PATCH",
                body: JSON.stringify({
                    product: product_input.value,
                    count: count_input.value,
                    price: price_input.value})
            }

            fetch(update_url, http_header_update)
                .then(() => {
                    load_products()
                })
        })
    }
}

grocery_store()