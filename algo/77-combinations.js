/**
 * Given two integers n and k, return all possible combinations of k numbers out of the range [1, n].

You may return the answer in any order.
 */

/** Uses a recursive function.  Iterates from 1 and uses a temp array to store the digits.  Will then call the recurisve function on the next number until the temp array is of k length
 *  After which, that temp array is pushed to the solutions array.  When that happens the temp array gets its last member popped, so that we can move on to the next number, while
 * the previously saved items in the temp array.
 *  This essentially implements two pointers, one slow dragger and one fast one that goes through the recurision and creates combinations.
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
 var combine = function(n, k) {
    let output = [];
    const backtrack = (first, tempArr) => {
        // Use a temp array to store the digits until it has a k length; then push to the solution arr.
        if (tempArr.length === k) { output.push([...tempArr]); }
        else if (tempArr.length < k) {
            // iterate through until the target num
            for (let i = first; i <= n; i++) {
                tempArr.push(i); // push i to tempArr to hold the digit
                backtrack(i+1, tempArr); // iterate i and then call recursive for that digit
                tempArr.pop(); // Once the length of the temporary arr hits k, pop the last digit in order to be able to move the pointer right
                // and start the process with the next number.
            }
        }
    };
    backtrack(1, []); // initialize the first number as 1, and the temporary array as empty.
    return output;
};


let n = 4, k = 2, Output =
[
  [2,4],
  [3,4],
  [2,3],
  [1,2],
  [1,3],
  [1,4],
];
console.log(combine(n,k), ' should be equal to ', Output);
n = 1, k = 1, Output = [[1]];
console.log(combine(n,k), ' should be equal to ', Output);

// n = 4, k = 3;
// combine(n, k);