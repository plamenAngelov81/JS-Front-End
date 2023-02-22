function printSum(num_1, num_2) {
    let new_list = []
    let current_sum = 0
    for (let i = num_1; i <= num_2; i++) {
        current_sum += i
        new_list.push(i)
    }
    console.log(new_list.join(' '))
    console.log(`Sum: ${current_sum}`)
}

printSum(50, 60)