/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
    let bannedWord = {};
    banned.forEach(x => { bannedWord[x] = true; })
    const isLetter = (string) => { return string.match(/^[A-Za-z]+$/) };
    let transformed = paragraph.replace(/,/g, ' ').split(' ').map(word => {
       return word.toLowerCase().split('')
           .filter(character => isLetter(character)).join('');
    }).filter(x => !(x in bannedWord) && x.length);
    let freq = {};
    let highestFreq = 0;
    let highestWord = '';
    transformed.forEach(word => {
        word in freq
            ? freq[word] += 1
            : freq[word] = 1;
        if (freq[word] > highestFreq) {
            highestFreq = freq[word];
            highestWord = word;
        }
    });
    return highestWord;
};