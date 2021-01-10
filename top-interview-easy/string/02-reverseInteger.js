/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    // const reversed = parseInt(Math.abs(x).toString().split('').reverse().join('')) * Math.sign(x);
    const reverseString = (string) => {
        let isNegative = string[0] === '-';
        if (isNegative) string = string.slice(1);
        for (let i = 0; i < parseInt(string.length / 2); i++) {
            let start = string[i];
            let end = string[string.length - 1 - i];
            string[i] = end;
            string[string.length - 1 - i] = start;
        }
        return parseInt(string.join('') * (isNegative ? -1 : 1))
    }
    const reversed = parseInt(reverseString(x.toString().split('')));
    return (reversed <= 0x7fffffff && reversed >= -0x80000000) ? reversed : 0;
};