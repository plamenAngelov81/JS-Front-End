// TODO
function attachEvents() {
    let base_url = 'http://localhost:3030/jsonstore/tasks/'
    const load_btn = document.getElementById('load-button')
    const add_button = document.getElementById('add-button')
    const todo_list_element = document.getElementById('todo-list')
    const title_input_element = document.getElementById('title')

    load_btn.addEventListener("click", loadInfo)
    add_button.addEventListener('click', addInfo)

    function loadInfo(e) {
        if (e) {
            e.preventDefault();
        }
        todo_list_element.innerHTML = ''
        fetch(base_url)
            .then((res) => res.json())
            .then((data) => {
                let objects = Object.values(data)
                for (const obj of objects) {
                    let name = obj.name
                    let obj_id = obj._id

                    let li = document.createElement('li')

                    let span = document.createElement('span')
                    span.textContent = `${name}`

                    let remove_btn = document.createElement('button')
                    remove_btn.textContent = 'Remove'
                    remove_btn.id = obj_id
                    remove_btn.addEventListener("click", deleteTask)

                    let edit_btn = document.createElement('button')
                    edit_btn.textContent = 'Edit'
                    edit_btn.id = obj_id
                    edit_btn.addEventListener("click", editTask)

                    li.appendChild(span)
                    li.appendChild(remove_btn)
                    li.appendChild(edit_btn)

                    todo_list_element.appendChild(li)
                }
            })
    }

    function addInfo(addEvent) {
        addEvent.preventDefault()
        let name = title_input_element.value

        let record_obj = {
            method: "POST",
            // headers: { "Content-type": "application/json" },
            body: JSON.stringify({ name })
        }

        fetch(base_url, record_obj)
            .then(() => {
                loadInfo()
                title_input_element.value = ''
            })

    }

    function deleteTask(deleteEvent) {
        let current_id = deleteEvent.currentTarget.id
        let delete_url = `${base_url}${current_id}`

        let http_headers = {
            method: "DELETE"
        }

        fetch(delete_url, http_headers)
            .then(() => {
                loadInfo()
            })
    }

    function editTask(editEvent) {
        let edit_id = editEvent.currentTarget.id
        let current_li = editEvent.currentTarget.parentElement
        let span_element = Array.from(current_li.children)[0]
        let current_title = span_element.textContent
        current_li.firstChild.remove()
        current_li.lastChild.remove()

        let submit_btn = document.createElement('button')
        submit_btn.textContent = 'Submit'
        submit_btn.id = edit_id
        submit_btn.addEventListener("click", submit_new_title)
        current_li.appendChild(submit_btn)

        let input_element = document.createElement('input')
        input_element.value = current_title
        current_li.prepend(input_element)
    }

    function submit_new_title(submitEvent) {
        submitEvent.preventDefault()
        let submit_id = submitEvent.currentTarget.id
        let submit_url = `${base_url}${submit_id}`

        let submit_li = submitEvent.currentTarget.parentElement
        let input = Array.from(submit_li.children)[0]


        let http_headers = {
            method:"PATCH",
            body: JSON.stringify({ name: input.value })
        }

        fetch(submit_url, http_headers)
            .then(() => {
                loadInfo()
            })
    }
}

attachEvents();
