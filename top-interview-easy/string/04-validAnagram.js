/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let freq = {};
    s.split('').forEach(x => {
        x in freq
            ? freq[x] += 1
            : freq[x] = 1;
    });
    for (let i = 0; i < t.length; i++) {
        const letter = t[i];
        if (letter in freq) {
            freq[letter] -= 1;
            if (freq[letter] < 1) { delete freq[letter]; }
        } else {
            return false;
        }
    }
    return Object.keys(freq).length === 0;
};