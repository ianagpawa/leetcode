/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const isAlpha = (string) => { return string.match(/^[A-Za-z0-9]+$/) };
    const filteredString = s.split('').filter(x => isAlpha(x));
    const length = filteredString.length;
    for (let i = 0; i < parseInt(length / 2); i++) {
        if (filteredString[i].toLowerCase() !== filteredString[length - 1 - i].toLowerCase()) { 
            return false; 
        }
    }
    return true;
};