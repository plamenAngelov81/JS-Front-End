function addAndSubtract(a, b, c)  {

    function add(num1, num2) {
        return num1 + num2
    }

    function sub(x , y) {
        return x - y
    }

    let result = sub(add(a, b), c)
    console.log(result)
}





addAndSubtract(23,
    6,
    10)

