function findSmallest(a, b, c) {
    let smallest = a;
    if (b < smallest) {
        smallest = b;
    }
    if (c < smallest) {
        smallest = c;
    }
    console.log(smallest)
}

findSmallest(5, 9, 1)