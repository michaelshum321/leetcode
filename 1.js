// 1. Two Sum
// https://leetcode.com/problems/two-sum/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // this way only requires 1 pass
    const valToIdx = {}
    for(let i = 0; i < nums.length; i++) {
        if ((target-nums[i]) in valToIdx) {
            return [valToIdx[target-nums[i]], i]
        }
        valToIdx[nums[i]] = i
    }

    // 2 passes
    // const valToIdx = {}
    // for(let i = 0; i < nums.length; i++) {
    //     valToIdx[nums[i]] = i
    // }
    // for(let i = 0; i < nums.length; i++) {
    //     const leftover = target-nums[i]
    //     if (leftover in valToIdx && valToIdx[leftover] !== i) {
    //         return [i, valToIdx[target-nums[i]]]
    //     }
    // }
    // return []
};