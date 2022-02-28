/**
 * Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.
 */

/**
 * @param {string} s
 * @return {string}
 */
 var reverseWords = function(s) {
    const getReverse = (wordStr) => {
        const word = wordStr.split('');
        for (let i = 0; i < parseInt(word.length/2); i++) {
            const left = word[i];
            const right = word[word.length - 1 -i];
            word[i] = right;
            word[word.length - 1 - i] = left;
        }
        return word.join('');
    }
    
    return s.split(' ')
        .map(word => getReverse(word))
        .join(' ');
};

const s = "Let's take LeetCode contest";
const sOutput = "s'teL ekat edoCteeL tsetnoc";

const s1 = "God Ding";
const s1Output = "doG gniD";

console.log(reverseWords(s));
console.log(sOutput);

// console.log(reverseWords(s1));
// console.log(s1Output);