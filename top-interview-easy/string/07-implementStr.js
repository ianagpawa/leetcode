/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if (needle.length === 0) return 0;
    if (haystack.length < needle.length) return -1;
    let i = 0;
    while (i + needle.length - 1 < haystack.length) {
        if (haystack[i] === needle[0] && haystack.slice(i, i + needle.length) === needle) return i;
        i++;
    }
    return -1;
};