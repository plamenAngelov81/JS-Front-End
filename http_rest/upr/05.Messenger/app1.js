function attachEvents() {
    const BASE_URL = "http://localhost:3030/jsonstore/messenger";

    let textArea = document.getElementById("messages");
    let nameInput = document.querySelector('input[name="author"]');
    let contentInput = document.querySelector('input[name="content"]');
    let submitBtn = document.getElementById("submit");
    let refreshBtn = document.getElementById("refresh");

    submitBtn.addEventListener("click", sendMessage);
    refreshBtn.addEventListener("click", showMessages);

    function sendMessage() {
        if (nameInput.value !== '' && contentInput.value !== '') {
            let data = { author: nameInput.value, content: contentInput.value };

            fetch(BASE_URL, {
                method: "post",
                headers: { "Content-type": "application/json" },
                body: JSON.stringify(data),
            });

            nameInput.value = '';
            contentInput.value = '';
        }
    }

    function showMessages() {
        textArea.textContent = "";
        let messages = [];
        fetch(BASE_URL)
            .then((res) => res.json())
            .then((result) => {
                Object.values(result).forEach((message) => {
                    messages.push(`${message.author}: ${message.content}`);
                    textArea.value = messages.join('\n')
                });
            });
    }
}

attachEvents();