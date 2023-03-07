function theImitationGame(array) {
    let message = array.shift();
    let line = array.shift();
    while (line !== 'Decode') {
        if (line.includes('Move')) {
            let [command, numOfLetters] = line.split('|');
            numOfLetters = Number(numOfLetters);
            let messageArr = message.split('')
            for (let i = 0; i < numOfLetters; i++) {
                let remove = messageArr.shift();
                messageArr.push(remove);
            }
            message = messageArr.join('');
        } else if (line.includes('Insert')) {
            let [command, index, value] = line.split('|');
            index = Number(index);
            let messageArr = message.split('');
            messageArr.splice(index, 0, value);
            message = messageArr.join('');
        } else if (line.includes('ChangeAll')) {
            let [command, substring, replacement] = line.split('|');
            message = message.split(substring).join(replacement);
        }
        line = array.shift();
    }
    console.log(`The decrypted message is: ${message}`)
}

theImitationGame([
    'owyouh',
    'Move|2',
    'Move|3',
    'Insert|3|are',
    'Insert|9|?',
    'Decode',
])