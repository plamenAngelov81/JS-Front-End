function solve(list, num) {
    let  current_list = [];
    for (let  i=0; i<list.length; i++) {
        if (i % num === 0) {
            current_list.push(list[i])
        }
    }
    return current_list
}

solve(['5', '20', '31', '4', '20'], 2)




