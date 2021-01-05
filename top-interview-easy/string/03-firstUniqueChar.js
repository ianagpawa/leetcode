/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let freq = {};
    s.split('').forEach((x, i) => {
        x in freq
            ? freq[x] += 1
            : freq[x] = 1;
    });
    for (let i = 0; i < s.length; i++) {
        if (freq[s[i]] === 1) { return i; }
    }
    return -1;
};