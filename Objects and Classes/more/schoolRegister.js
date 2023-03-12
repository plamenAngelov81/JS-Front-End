function schoolRegister(data) {
    class Student {
        constructor(name, score) {
            this.name = name
            this.score = score
        }
    }
    function getStudentData(someArr) {
        let statsArr = []
        for (const element of someArr) {
            let currentElement = element.split(': ')[1]
            statsArr.push(currentElement)
        }
        return statsArr
    }

    let students = {}
    for (const line of data) {
        let currentData = line.split(', ')
        let [name, grade, score] = getStudentData(currentData)
        let currentGrade = Number(grade) + 1

        if (Number(score) >= 3) {
            let currentStudent = new Student(name, score)
            if(!students.hasOwnProperty(currentGrade)) {

                students[currentGrade] = [currentStudent]
            } else {
                students[currentGrade].push(currentStudent)
            }
        }
    }


    for (const studentsKey in students) {
        console.log(`${studentsKey} Grade`)
        let names = []
        let sumGrades = 0
        for (let i = 0; i <students[studentsKey].length; i++) {
            names.push(students[studentsKey][i].name)
            sumGrades += Number(students[studentsKey][i].score)
        }
        let averageGrade = sumGrades / students[studentsKey].length
        console.log(`List of students: ${names.join(', ')}`)
        console.log(`Average annual score from last year: ${averageGrade.toFixed(2)}`)
        console.log()
    }
}

schoolRegister([
    "Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
    "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
    "Student name: George, Grade: 8, Graduated with an average score: 2.83",
    "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
    "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
    "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
    "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
    "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
    "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
    "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
    "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
    "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00"
])