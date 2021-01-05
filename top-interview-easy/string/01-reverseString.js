/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    const length = s.length;
    for (let i = 0; i < parseInt(length/2); i++) {
        const forward = s[i];
        const backInd = length - 1 -i;
        s[i] = s[backInd];;
        s[backInd] = forward;
    }
};