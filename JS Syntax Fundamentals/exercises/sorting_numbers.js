function sorting_numbers(input) {
    let nums = input
    let result = [];
    nums.sort(function (a,b) {
        return a - b
    })
    while (nums.length > 0) {
        let first_element = nums.shift();
        let last_element = nums.pop();
        result.push(first_element);
        result.push(last_element);
    }
    console.log(result)
}

sorting_numbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56])