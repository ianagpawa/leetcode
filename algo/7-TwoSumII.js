/**
 * Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.

Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.

The tests are generated such that there is exactly one solution. You may not use the same element twice.

Your solution must use only constant extra space.
 */

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(numbers, target) {
    // let values;
    // for (let i = 0; i < numbers.length; i++ ) {
    //     const diff = target - numbers[i];
    //     for (let j = i + 1; j < numbers.length; j++) {
    //         if (numbers[j] === diff) {
    //             values = [i+1, j+1]
    //         }
    //     }
    // }
    // return values
    /**
     * Need two pointers, from opposite ends, start and end.
     * Since numbers are ordered, you can add them together and check the value.  If summed value equals the target, then you return the indexes (with the +1 for each as per spec)
     * If the summed value is greater than the target, then that means you can decrease the value on the right and move down the line.
     * In contrast, if the value is less than the target, then you can iterate from the beginning and get a larger number from the beginning of the line.
     */
    let start = 0,
        end = numbers.length - 1;
    while (start <= end) {
        let sumValue = numbers[start] + numbers[end];
        if (sumValue === target) {
            return [start + 1, end + 1];
        } else if (sumValue > target) {
            end--;
        } else {
            start++;
        }
    }
};

console.log(twoSum([2,7,11,15], 9)); // [1,2]
console.log(twoSum([2,3,4], 6)); // [1,3]
console.log(twoSum([-1,0], -1)); // [1,2]