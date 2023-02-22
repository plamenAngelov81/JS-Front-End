function largest_number(num_1, num_2, num_3) {
    let some_arr = [];
    some_arr.push(num_1);
    some_arr.push(num_2);
    some_arr.push(num_3);
    max_num = Math.max(...some_arr)
    console.log(`The largest number is ${max_num}.`);
}


largest_number(2, 4, 6)