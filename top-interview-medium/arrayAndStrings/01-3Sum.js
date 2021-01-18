function getPair (arr, target, freq) {
    let found = [];
    arr.forEach(x => {
        if (freq[val] && freq[val] > 0) {
            found.push([val, x, target]);
        }
    });
    return found;
}
const arr = [-1,0,1, 2,-1,-4];
// const answer = getPair(arr, 2);

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let found = [];
    nums.sort((a,b) => a - b);
    for (let i = 0; i < nums.length - 2; i++) {
        if (nums[i] > 0) break;
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        for (let forward = i + 1, backward = nums.length - 1; forward < backward;) {
            const sum = nums[i] + nums[forward] + nums[backward];
            if (sum === 0) {
                found.push([nums[i], nums[forward], nums[backward]]);
                forward++;
                backward--;
                while (forward < backward && nums[forward] === nums[forward - 1]) { forward++ };
                while (forward < backward && nums[backward] === nums[backward + 1]) { backward-- };
               
            } else if (sum > 0) {
                backward--;
            } else {
                forward++;
            }
        }   
    }
    return found;


};


console.log(threeSum(arr));