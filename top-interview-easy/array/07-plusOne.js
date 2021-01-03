/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    const lastInd = digits.length -1;
    let carryOver = 0;
    for (let i = lastInd; i >= 0; i--) {
        let amount = digits[i] + carryOver;
        if (i === lastInd) { amount += 1; }
        carryOver = amount > 9 ? 1 : 0;
        amount = amount % 10;
        digits[i] = amount;
    }
    if (carryOver === 1) { digits.splice(0,0,1); }
    return digits;
};