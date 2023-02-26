function orderStringsByLengthAndAlphabetically(strings) {
    strings.sort((a, b) => a.length - b.length || a.localeCompare(b, undefined, { sensitivity: 'base' }));
    console.log(strings.join('\n'))
}

orderStringsByLengthAndAlphabetically(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George'])