function attachEvents() {
    let base_url = 'http://localhost:3030/jsonstore/messenger'
    let author_input = document.querySelector('input[name="author"]')
    let content_input = document.querySelector('input[name="content"]')
    const send_btn = document.getElementById('submit')
    const refresh_btn = document.getElementById('refresh')
    const message_area = document.getElementById('messages')

    send_btn.addEventListener('click', send_message)
    refresh_btn.addEventListener('click', refresh_text_area)

    function send_message() {
        let author = author_input.value
        let content = content_input.value
        if (author === '' || content === '') {return}
        let record = {author, content}
        let obj = {
            method: "POST",
            headers: {"Content-type": "application/json"},
            body: JSON.stringify(record)
        }

        fetch(base_url, obj)

        author_input.value = ''
        content_input.value = ''
    }

    function refresh_text_area() {


        fetch(base_url)
            .then((res) => res.json())
            .then((data) => {
                let result = []
                for (const i in data) {
                    let author_name = data[i].author
                    let message_content = data[i].content
                    result.push(`${author_name}: ${message_content}`)
                }
                message_area.innerHTML = result.join('\n')
            })
    }
}

attachEvents()