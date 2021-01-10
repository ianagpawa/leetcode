/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    let mapping = { 1: '1' };
    const getVal = (string) => {
        let i = 0;
        let j = 1;
        let count = 1;
        let builtString = '';
        while (i < string.length) {
            if (string[j] === string[i]) {
                count++;
            } else {
                builtString += `${count}${string[i]}`;
                i = j;
                count = 1;
            }
            j++;
        }
        return builtString;
    };
    const getMappedVal = (m) => {
        if (!(m in mapping)) { 
            mapping[m] = getVal(getMappedVal(m-1));
        }
        return mapping[m];
    };
    return getMappedVal(n);
};