const fs = require('fs');
let text = fs.readFileSync('./wordlist.txt').toString();
let words = text.split("\n");

text = fs.readFileSync('./RawWords.txt').toString();
let raw = text.split("\n");

let inOrderWords = words.map(word => {
    return word.split('').sort().join('');
});
let unscrambled = raw.map(word => {
    let sorted = word.split('').sort().join('');
    let index = inOrderWords.findIndex(w => w == sorted);
    return words[index];
});
console.log(unscrambled.join(','));