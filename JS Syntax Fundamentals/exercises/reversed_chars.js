function reversedChars (ch_1, ch_2, ch_3) {
    let current_list = []
    current_list.push(ch_1)
    current_list.push(ch_2)
    current_list.push(ch_3)
    current_list.reverse()
    console.log(current_list.join(' '))
}

reversedChars('A',
    'B',
    'C')

reversedChars('1',
    'L',
    '&')