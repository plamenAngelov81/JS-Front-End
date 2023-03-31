function attachEvents() {
    let base_url = 'http://localhost:3030/jsonstore/collections/students'
    const table_body = Array.from(document.getElementsByTagName('tbody'))[0]
    const submit_btn = document.getElementById('submit')
    submit_btn.addEventListener('click', createStudent)

    loadStudents()

    function loadStudents() {
        table_body.innerHTML = ''
        fetch(base_url)
            .then((res) => res.json())
            .then((data) => {

                for (const item in data) {
                    let current_student = data[item]
                    let {facultyNumber, firstName, grade, lastName, _id} = current_student

                    let tr = document.createElement('tr')

                    let first_name_td = document.createElement('td')
                    first_name_td.textContent = firstName

                    let last_name_td = document.createElement('td')
                    last_name_td.textContent = lastName

                    let faculty_num_td = document.createElement('td')
                    faculty_num_td.textContent = facultyNumber

                    let grade_td = document.createElement('td')
                    grade_td.textContent = grade

                    tr.appendChild(first_name_td)
                    tr.appendChild(last_name_td)
                    tr.appendChild(faculty_num_td)
                    tr.appendChild(grade_td)

                    table_body.appendChild(tr)

                }
            })
    }

    function createStudent() {
        let firstName = document.querySelector('input[name="firstName"]').value
        let lastName = document.querySelector('input[name="lastName"]').value
        let facultyNumber = document.querySelector('input[name="facultyNumber"]').value
        let grade = document.querySelector('input[name="grade"]').value

        if (firstName === '' || lastName === '' || facultyNumber === '' || grade === ''){return}

        let new_student = {firstName, lastName, facultyNumber, grade}

        let student_obj = {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(new_student)
        }

        fetch(base_url, student_obj)
            .then((res) => res.json())
            .then(() => {
                loadStudents()
                document.querySelector('input[name="firstName"]').value = ''
                document.querySelector('input[name="lastName"]').value = ''
                document.querySelector('input[name="facultyNumber"]').value = ''
                document.querySelector('input[name="grade"]').value = ''
            })

    }
}

attachEvents();