function formatGrade (grade) {
    let strGrade = ''
    if (grade < 3) {
        return console.log(`Fail (2)`)
    }else if (3 <= grade && grade < 3.50) {
        strGrade = 'Poor'
    }else if (3.50 <= grade && grade < 4.50) {
        strGrade = 'Good'
    } else if (4.50 <= grade && grade < 5.50) {
        strGrade = 'Very good'
    }else if (grade >= 5.50) {
        strGrade = 'Excellent'
    }
    console.log(`${strGrade} (${grade.toFixed(2)})`)
}

formatGrade(3.50)