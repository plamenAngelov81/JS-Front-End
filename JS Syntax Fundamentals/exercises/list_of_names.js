function list_of_names(some_arr) {
    some_arr.sort(function(a, b) {
        return a.toLowerCase().localeCompare(b.toLowerCase());
    });
    for (let i = 0; i < some_arr.length; i++) {
        let counter = 1 + i
        console.log(`${counter}.${some_arr[i]}`)
    }
}

list_of_names(["John", "Bob", "Christina", "Ema"])
