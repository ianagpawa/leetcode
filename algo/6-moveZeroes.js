/**
 * 
 * Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array. 
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var moveZeroes = function(nums) {
     /**
      * Use two pointer, slow and fast movers to swap zeroes down the line. The fast mover checks for a non-zero value, then swaps it with the slow mover left behind, which holds 
      * a zero.  For the iteration, only if the current value is non-zero will the slow mover move up after the swap; otherwise it stays on the same index until the fast mover
      * finds a non-zero to swap with.
      * 
      * If numbers at the beginning are non-zero, then both the fast and slow movers will iterate up, until they find a zero, then the slow mover with stay behind while the 
      * fast mover iterates automatically.
      * 
      * When swapping, you need to save the slow value, then set the current position to the slow value, and then set the slow position to the current value.
      */
    let slow = 0;
    // iterate based on fast mover
    for (let i = 0; i < nums.length; i++) {
        // get Value for fast mover
        const currentValue = nums[i];
        if (currentValue !== 0) {
            // save slow value
            const slowValue = nums[slow];
            // set value at index slow to current value since it's non-zero
            nums[slow] = currentValue
            // set current value to the slowValue to finish the swap.
            nums[i] = slowValue;
            // iterate slow to move it forward.
            slow++;
        }
        // if current value is 0 then slow mover stays, and fast mover skips.
    }
    return nums;
};

console.log(moveZeroes([0,1,0,3,12]));
console.log(moveZeroes([0]));