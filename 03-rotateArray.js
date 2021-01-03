/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    const moveRight = () => {
        const length = nums.length
        let last = nums[length - 1];
        let prev = nums[0];
        for (let j=1; j < length; j++) {
            const current = nums[j];
            nums[j] = prev;
            prev = current;
        }
        nums[0] = last;
    }
    [...Array(k).keys()].forEach(() => {
       moveRight(); 
    });
};

// Alternate solution with additional data structure
// /**
//  * @param {number[]} nums
//  * @param {number} k
//  * @return {void} Do not return anything, modify nums in-place instead.
//  */
// var rotate = function(nums, k) {
//     let mappings = {};
//     nums.forEach((x, ind) => {
//        mappings[(ind + k) % nums.length] = x 
//     });
//     Object.keys(mappings).forEach(key => {
//         nums[key] = mappings[key];
//     });
// };