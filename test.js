/**
 * 
 * @param {number} k
* @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
   const oneToTheRight = (nums) => {
       let last = nums[nums.length - 1];
       let previous = nums[0];
       for (let fast = 1; fast < nums.length; fast++) {
           const current = nums[fast];
           nums[fast] = previous;
           previous = current;
       }
       nums[0] = last;
   };
   
   for (let i = 0; i < k; i++) {
       oneToTheRight(nums);
   }
   return nums;
};

const nums = [1,2,3,4,5,6,7]
const k = 3
// [5,6,7,1,2,3,4]
console.log(rotate(nums, k));