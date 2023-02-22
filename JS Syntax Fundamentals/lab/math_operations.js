function math_operations(num_1, num_2, operator) {
    let result = 0
    if (operator === '+') {
        result = num_1 + num_2
    }

    else if (operator === '-') {
        result = num_1 - num_2
    }

    else if (operator === '*') {
        result = num_1 * num_2
    }

    else if (operator === '/') {
        result = num_1 / num_2
    }

    else if (operator === '%') {
        result = num_1 % num_2
    }

    else if (operator === '**') {
        result = num_1 ** num_2
    }

    console.log(result);
}

math_operations(2, 3, '**')