/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let longest = 0;
    let hashTable = {};
    for (let slow = 0, fast = 0; fast < s.length; fast++) {
        const currentChar = s[fast];
        if (currentChar in hashTable && hashTable[currentChar] > slow) { 
            slow = hashTable[currentChar];
        }
        if (fast - slow + 1 > longest) { longest = fast - slow + 1 }
        console.log(currentChar, hashTable[currentChar], fast + 1)
        hashTable[currentChar] = fast + 1;
        
    }
    console.log(hashTable)
    return longest;
};

const s = "abcabcbb";
const answer = lengthOfLongestSubstring(s);

console.log(answer);