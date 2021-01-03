/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let hashTable = {};
    for(let i = 0; i < nums.length; i++) {
        let current = nums[i];
        if (current in hashTable) { delete hashTable[current]; }
        else { hashTable[current] = true; }
    }
    return Object.keys(hashTable)[0];
};