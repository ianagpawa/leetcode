/** Given an array, rotate the array to the right by k steps, where k is non-negative. */

// /**
//  * @param {number[]} nums
//  * @param {number} k
//  * @return {void} Do not return anything, modify nums in-place instead.
//  */
//  var rotate = function(nums, k) {
//     const getNewIndex = (ind) => {
//         const remainder = k % nums.length;
//         return (remainder + ind) % nums.length;
//     }
//     let copied = [...nums];
//     nums.forEach((n, ind) => {
//         copied[getNewIndex(ind)] = n; 
//     });
//     return copied;
// };

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
    // const moveRight = () => {
    //     const length = nums.length
    //     let last = nums[length - 1];
    //     let prev = nums[0];
    //     for (let j=1; j < length; j++) {
    //         const current = nums[j];
    //         nums[j] = prev;
    //         prev = current;
    //     }
    //     nums[0] = last;
    // }
    // [...Array(k).keys()].forEach(() => {
    //    moveRight(); 
    // });
    // return nums;

    const map = {};
    nums.forEach((x, ind) => {
        map[(ind + k) % nums.length] = x;
    });
    Object.keys(map)
        .forEach(n => nums[parseInt(n)] = parseInt(map[n]));
    return nums;

    // if (k > nums.length) k = k % nums.length;
    // const removed = nums.splice(-k);
    // nums.unshift(...removed);
    // return nums;

    // let temp = []
    // for (let i = 0; i < nums.length; i++) {
    //     temp[(i + k) % nums.length] = nums[i]
    // }
    // for (let i = 0; i < nums.length; i++) {
    //     nums[i] = temp[i]
    // }
    // return nums;
};

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3)); // [5,6,7,1,2,3,4]
console.log(rotate([-1, -100, 3, 99], 2)); // [3,99,-1,-100]