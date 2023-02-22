function cooking_by_numbers(num, command_1, command_2, command_3, command_4, command_5) {
    let current_num = Number(num)
    let command_list = []
    command_list.push(command_1)
    command_list.push(command_2)
    command_list.push(command_3)
    command_list.push(command_4)
    command_list.push(command_5)

    for (let i = 0; i < command_list.length; i++) {
        if (command_list[i] === 'chop') {
            current_num = current_num / 2
            console.log(current_num)
        }
        else if (command_list[i] === 'dice') {
            current_num = Math.sqrt(current_num)
            console.log(current_num)
        }
        else if (command_list[i] === 'spice') {
            current_num += 1
            console.log(current_num)
        }
        else if (command_list[i] === 'bake') {
            current_num = current_num * 3
            console.log(current_num)
        }
        else if (command_list[i] === 'fillet') {
            current_num = current_num - current_num * 0.2
            console.log(current_num)
        }
    }
}

cooking_by_numbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet')