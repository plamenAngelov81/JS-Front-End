function sum_elements(some_list) {
    let firstElement = some_list[0];
    let lastElement = some_list[some_list.length - 1];
    sum = firstElement + lastElement;
    console.log(sum);
}

sum_elements([20, 30, 40])