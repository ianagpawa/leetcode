/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let common = '';
    if (strs.length < 1) { return common; }
    const first = strs[0].split('');
    for (let i = 0; i < first.length; i++) {
        if (strs.every(word => word[i] === first[i])) { 
            common += first[i];
        } else {
            return common;
        }
    }
    return common;
};