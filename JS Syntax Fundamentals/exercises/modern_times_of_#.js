function modern_times(text) {
    let words = text.split(" ");
    let hashtags = words.filter(word => word.startsWith("#"));

    for (let i = 0; i < hashtags.length; i++) {
        if (hashtags[i].length > 1) {
            hashtags[i] = hashtags[i].slice(1)

            console.log(hashtags[i])
        }
    }
}

modern_times('The symbol # is known #variously in English-speaking #regions as the #number sign')
