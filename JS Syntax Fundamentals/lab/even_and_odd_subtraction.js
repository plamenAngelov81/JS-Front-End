function even_odd(some_list) {
    let even_sum = 0;
    let odd_sum = 0;
    for (i = 0; i < some_list.length; i++) {
        current_num = Number(some_list[i]);
        if (current_num % 2 === 0) {
            even_sum += current_num;
        } else {
            odd_sum += current_num;
        }
    }

    result = even_sum - odd_sum;
    console.log(result);
}   

even_odd([1,2,3,4,5,6])
even_odd([3,5,7,9])
even_odd([2,4,6,8,10])