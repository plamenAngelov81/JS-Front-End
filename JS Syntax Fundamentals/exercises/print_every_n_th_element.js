function solve(list, num) {
    let counter = 0;
    // let  current_list = [];
    while (true) {
        if (counter >= list.length) {
            break
        }
        console.log(list[counter])
        counter += num;
    }
}

solve(['5', '20', '31', '4', '20'], 2)
// solve(['dsa', 'asd', 'test', 'tset'], 2)
// solve(['1', '2', '3', '4', '5'], 6)