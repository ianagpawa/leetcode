/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    const getFreq = (nums) => {
        let freq = {};
        nums.forEach(x => {
            x in freq
                ? freq[x] += 1
                : freq[x] = 1;
        })
        return freq;
    }
    let common = [];
    const freq1 = getFreq(nums1);
    nums2.forEach(x => {
        if (x in freq1 && freq1[x] > 0) {
            common.push(x);
            freq1[x] -= 1;
        }
    });
    return common;
};