/**
 * Write a function that reverses a string. The input string is given as an array of characters s.

You must do this by modifying the input array in-place with O(1) extra memory.
 */

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
 var reverseString = function(s) {
    const midpoint = parseInt(s.length / 2);
    for (let i = 0; i <= midpoint; i++) {
        const left = s[i];
        const right = s[s.length - 1 -i];
        s[i] = right;
        s[s.length - 1 -i] = left;
    }
    return s;
};

console.log(reverseString(["h","e","l","l","o"]));  // ["o","l","l","e","h"]
console.log(reverseString(["H","a","n","n","a","h"]));  // ["h","a","n","n","a","H"]