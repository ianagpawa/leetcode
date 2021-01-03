/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let slow = 0;
    nums.forEach(x => {
        if (nums[slow] !== x) {
            slow += 1;
            nums[slow] = x;
        }
    });
    return slow + 1;
};
