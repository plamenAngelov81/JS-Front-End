function oddEvenSum(num) {
    let numToStr = num.toString()
    let evenSum = 0
    let oddSum = 0
    for (let i of numToStr) {
        if (Number(i) % 2 === 0) {
            evenSum += Number(i)
        } else {
            oddSum += Number(i)
        }
    }
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`)
}

oddEvenSum(3495892137259234)






// def even_odd_sum():
// even_sum = 0
// odd_sum = 0
// for i in num:
// if int(i) % 2 == 0:
// even_sum += int(i)
// else:
// odd_sum += int(i)
//
// print(f"Odd sum = {odd_sum}, Even sum = {even_sum}")