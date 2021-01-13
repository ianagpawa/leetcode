/**
 * @param {number[]} time
 * @return {number}
 */
var numPairsDivisibleBy60 = function(time) {
    let pairs = 0;
    const length = time.length;
    for (let i = 0; i < length; i++) {
        const currentVal = time[i];
        for (let j = i + 1; j < length; j++) {
            if ((time[i] + time[j]) % 60 === 0) {
                pairs += 1;
            }
        }
    }
    return pairs;
};