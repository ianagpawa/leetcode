/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let slow = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != 0) {
            const prev = nums[slow];
            nums[slow] = nums[i];
            slow += 1;
            nums[i] = prev;
        }
    }
};