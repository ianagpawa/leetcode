/**
 * 
Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.

In other words, return true if one of s1's permutations is the substring of s2.
 */

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
 var checkInclusion = function(s1, s2) {
    const getFrequencyMap = (word) => {
        let mapping = {};
        word.split('')
            .forEach((letter) => {
                letter in mapping 
                    ? mapping[letter] += 1 
                    : mapping[letter] = 1;
        });
        return mapping;
    };
    const s1Mapping = getFrequencyMap(s1);
    let i = 0;
    while (i + s1.length <= s2.length) {
        const partial = s2.slice(i, i+s1.length);
        const currentMap = {...s1Mapping};
        let j = 0;
        while (j < partial.length) {
            if (partial[j] in currentMap) {
                currentMap[partial[j]] -= 1;
                if (currentMap[partial[j]] < 1) {
                    delete currentMap[partial[j]];
                }
                if (Object.keys(currentMap).length === 0) { return true;}
            }
            j++;
        }
        i++;
    } 
    return false;
    // let hasPermutations = false;
    // for (let i = 0; i + s1.length <= s2.length; i++) {
    //     let currentMap = {...s1Mapping};
    //     const partial = s2.slice(i, i+s1.length);
    //     partial.split('')
    //         .forEach(x =>  {
    //             if (x in currentMap) {
    //                 currentMap[x] -= 1;
    //                 if (currentMap[x] < 1) {
    //                     delete currentMap[x];
    //                 }
    //                 if (Object.keys(currentMap).length === 0) {
    //                     hasPermutations = true;
    //                 }
    //             } 
    //     });
    // }
    // return hasPermutations;
};


let s1 = "ab", s2 = "eidbaooo", expected1 = true;
console.log(checkInclusion(s1, s2), ` : Value should be ${expected1}`);
let s3 = "ab", s4 = "eidboaoo", expected2 = false;
console.log(checkInclusion(s3, s4), ` : Value should be ${expected2}`);
