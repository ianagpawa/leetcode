/**
 * @param {string} palindrome
 * @return {string}
 */
var breakPalindrome = function(palindrome) {
    const length = palindrome.length;
    if (length === 1) { return ''; }
    const isOdd = length % 2 === 1;
    let replaced = [...palindrome.split('')];
    const midVal = parseInt(length / 2);
    for(let i = 0; i < length; i++) {
        const x = replaced[i];
        if (!(i === midVal && isOdd) && x !== 'a') {
           replaced[i] = 'a';
           return replaced.join('');
       } else if (i === (length - 1) && x === 'a') {
           replaced[i] = 'b';
           return replaced.join('');
       }
    }
};