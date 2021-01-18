// Given a string s and an int k, return all unique substrings of s of size k with k distinct characters.
// Input: s = "abcabc", k = 3
// Output: ["abc", "bca", "cab"]

// Input: s = "abacab", k = 3
// Output: ["bac", "cab"]

// Input: s = "awaglknagawunagwkwagl", k = 4
// Output: ["wagl", "aglk", "glkn", "lkna", "knag", "gawu", "awun", "wuna", "unag", "nagw", "agwk", "kwag"]
// Explanation: 
// Substrings in order are: "wagl", "aglk", "glkn", "lkna", "knag", "gawu", "awun", "wuna", "unag", "nagw", "agwk", "kwag", "wagl" 
// "wagl" is repeated twice, but is included in the output once.

function getUniqueSubstrings(string, k) {
    let freq = {};
    let words = {};
    let hasDup = false;
    for (let a = 0; a < k; a++) {
        const character = string[a];
        if (character in freq) {
            freq[character] += 1;
            hasDup = true;
        } else {
            freq[character] = 1;
        }
    }
    if (!hasDup) { words[string.slice(0,k)] = true; }
    freq[string[0]] -= 1;
    if (freq[string[0]] <= 0) { delete freq[string[0]]; }
    for (let i = 1, j = k; i + k < string.length; i++, j++) {
        const str = string.slice(i, j + 1);
        const newChar = string[j];
        if (newChar in freq) {
            freq[newChar] += 1;
        } else {
            console.log(newChar, newChar in freq)
            freq[newChar] = 1;
            words[str] = true;
        }
        freq[string[i]] -= 1;
        if (freq[string[i]] <= 0) { delete freq[string[i]]; }
        
    }
    return Object.keys(words);
}

const string = "abcabc", k = 3;
// const answer = getUniqueSubstrings(string, k);
// console.log(answer);

const string2 = "abacab", k2 = 3
// const answer2 = getUniqueSubstrings(string2, k2);
// console.log(answer2);

const string3 = "awaglknagawunagwkwagl", k3 = 4
const answer3 = getUniqueSubstrings(string3, k3);
console.log(answer3);