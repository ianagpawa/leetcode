/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let hashTable = {};
    for (let i = 0; i < nums.length; i++) {
        const current = nums[i];
        const diff = target - current;
        if (diff in hashTable) {
            return [hashTable[diff], i];
        } else {
            hashTable[current] = i;
        }
    }
};