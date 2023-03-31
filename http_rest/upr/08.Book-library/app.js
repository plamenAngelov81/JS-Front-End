function attachEvents() {
  const BASE_URL = "http://localhost:3030/jsonstore/collections/books/";
  let tableBody = document.querySelector("table > tbody");

  let loadBtn = document.getElementById("loadBooks");
  loadBtn.addEventListener("click", loadBooks);

  let submitBtn = document.querySelector("#form > button");
  submitBtn.addEventListener("click", submitBook);

  let titleInputElement = document.querySelector('input[name="title"]');
  let authorInputElement = document.querySelector('input[name="author"]');

  let formName = document.querySelector("#form > h3");

  let editBookId = "";

  function loadBooks() {
    

    fetch(BASE_URL)
      .then((res) => res.json())
      .then((result) => {
        tableBody.innerHTML = "";
        Object.entries(result).forEach(([key, book]) => {
          let row = document.createElement("tr");
          let nameColumn = document.createElement("td");
          nameColumn.textContent = book.title;
          row.appendChild(nameColumn);

          let authorColumn = document.createElement("td");
          authorColumn.textContent = book.author;
          row.appendChild(authorColumn);

          let buttonsElement = document.createElement("td");
          let editBtn = document.createElement("button");

          editBtn.textContent = "Edit";
          editBtn.addEventListener("click", () => {
            editBookId = key;
            formName.textContent = "Edit FORM";
            submitBtn.textContent = "Save";

            titleInputElement.value = book.title;
            authorInputElement.value = book.author;
          });

          buttonsElement.appendChild(editBtn);

          let deleteBtn = document.createElement("button");
          deleteBtn.id = key;
          deleteBtn.textContent = "Delete";
          deleteBtn.addEventListener("click", deleteBook);
          buttonsElement.appendChild(deleteBtn);

          row.appendChild(buttonsElement);

          tableBody.appendChild(row);
        });
      });
  }

  function submitBook() {
    if (titleInputElement.value && authorInputElement.value) {
      title = titleInputElement.value;
      author = authorInputElement.value;
      let url = BASE_URL;

      let data = { author, title };

      let httpheaders = {
        method: "post",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(data),
      };

      if (formName.textContent === "Edit FORM") {
        httpheaders = {
          method: "put",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify(data),
        };
        url += editBookId;
      }

      fetch(url, httpheaders)
        .then((res) => res.json())
        .then(() => {
          loadBooks();
          titleInputElement.value = "";
          authorInputElement.value = "";
          formName.textContent = "FORM";
          submitBtn.textContent = "Submit";
        });
    }
  }

  function deleteBook() {
    let httpheaders = { method: "delete" };
    fetch(`${BASE_URL}${this.id}`, httpheaders)
      .then((res) => res.json())
      .then(loadBooks);
  }
}

attachEvents();
