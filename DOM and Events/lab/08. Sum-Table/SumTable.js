function sumTable() {
    let prices = Array.from(document.querySelectorAll('table tr td'))
    let sum = document.getElementById('sum')
    let currentSum = 0
    for (let i = 0; i < prices.length; i++) {
        if (i % 2 !== 0 && prices[i].textContent !== '') {
            let currentNum = Number(prices[i].textContent)
            currentSum += currentNum
        }
    }
    sum.textContent = currentSum.toString()
}