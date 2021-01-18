/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const getStringFreq = (word) => {
        let freq = {};
        word.split('').forEach(x => {
            x in freq
                ? freq[x] += 1
                : freq[x] = 1;
        });
        return Object.keys(freq)
            .sort()
            .map(x => `${x}${freq[x]}`)
            .join('');
    }
    let mapping = {};
    strs.forEach(x => {
        const stringFreq = getStringFreq(x);
        stringFreq in mapping
            ? mapping[stringFreq].push(x)
            : mapping[stringFreq] = [x];
    });
    let results = [];
    Object.keys(mapping).forEach(x => results.push(mapping[x]));
    return results;
};

const strs = ["eat","tea","tan","ate","nat","bat"];

const answer = groupAnagrams(strs);
console.log(answer);