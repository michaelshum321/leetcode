// 189. Rotate Array
// https://leetcode.com/problems/rotate-array/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    k = nums.length - (k % nums.length)
    const res = nums.slice(k,nums.length)
    res.push(...nums.slice(0,k))
    while(nums.length){
        nums.pop()
    }
    nums.push(...res)
};