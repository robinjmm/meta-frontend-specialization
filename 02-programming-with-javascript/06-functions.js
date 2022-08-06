function letterFinder(word, match) {
    for (let i = 0; i < word.length; i++) {
        let letter = word[i];
        if (letter === match) {
            console.log("Found the", match, "at", i);
        } else {
            console.log("---No match found at", i);
        }
    }
}

letterFinder("test", "t");