function reverse_list(value, some_list){
    let new_arr = []
    for (let i = 0; i < value; i++){
        new_arr.push(some_list[i])
    }
    new_arr.reverse()
    let result = new_arr.join(" ");
    console.log(result);
}


reverse_list(3, [10, 20, 30, 40, 50])
reverse_list(4, [-1, 20, 99, 5])
reverse_list(2, [66, 43, 75, 89, 47])