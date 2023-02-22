function array_rotation(list, number_of_rotations) {
    let counter = 0
    while (true) {
        if (number_of_rotations === 0) {
            break
        }
        let current_num = list[0]
        list.shift()
        list.push(current_num)
        counter += 1
        if (counter === number_of_rotations) {
            break
        }
    }
    console.log(list.join(' '))
}

array_rotation([51, 47, 32, 61, 21], 2)
array_rotation([32, 21, 61, 1], 4)
array_rotation([2, 4, 15, 31], 5)