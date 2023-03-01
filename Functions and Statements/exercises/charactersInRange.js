function charactersInRange(ch1, ch2) {
    let startValue = ch1.charCodeAt(0)
    let endValue = ch2.charCodeAt(0)
    if (startValue > endValue) {
        [startValue, endValue] = [endValue, startValue];
    }
    let result = []
    for (let i = startValue + 1; i < endValue; i++) {
        let currentCh = String.fromCharCode(i)
        result.push(currentCh)
    }
    console.log(result.join(' '))
}

charactersInRange('C', '#')