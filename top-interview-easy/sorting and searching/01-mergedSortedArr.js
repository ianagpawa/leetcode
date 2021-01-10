/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let first = m - 1;
    let second = n - 1;
    let index = m + n - 1;
    while (second >= 0) {
        nums1[index] = nums1[first] > nums2[second]
            ? nums1[first--]
            : nums2[second--];
        index--;
    }
};