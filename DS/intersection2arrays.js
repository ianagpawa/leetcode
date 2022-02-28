/** Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.
 * 
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 var intersect = function(nums1, nums2) {
    const getMapping = (arr) => {
        let mapping = {};
        arr.forEach(x => {
            x in mapping
                ? mapping[x] += 1
                : mapping[x] = 1;
        });
        return mapping;
    }
    
    let firstMap = getMapping(nums1);
    let secondMap = getMapping(nums2);
    let intersection = [];
    Object.keys(firstMap)
        .forEach(val => {
            if (val in secondMap) {
                const occurences = secondMap[val] > firstMap[val]
                    ? firstMap[val]
                    : secondMap[val];
                for (let i = 0; i < occurences; i++) { intersection.push(parseInt(val)); }
            }
    });
    return intersection;
};

let nums1 = [1,2,2,1], nums2 = [2,2], Output = [2,2];
console.log(intersect(nums1, nums2), ` Output should be ${Output}`);
nums1 = [4,9,5], nums2 = [9,4,9,8,4], Output = [4,9];
console.log(intersect(nums1, nums2), ` Output should be ${Output}`);