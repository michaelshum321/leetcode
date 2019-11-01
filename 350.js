// 350. Intersection of Two Arrays II
// https://leetcode.com/problems/intersection-of-two-arrays-ii/
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    const counter = {}
    const output = []
    nums1.forEach((val) => {
        if (val in counter) {
            counter[val]++
        }else{
            counter[val] = 1
        }
    })
    nums2.forEach((val) => {
        if (val in counter && counter[val] > 0) {
            counter[val]--
            output.push(val)
        }
    })
    return output
};