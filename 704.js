// 704. Binary Search
// https://leetcode.com/problems/binary-search/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    if (!nums || !nums.length) {
        return -1
    }
    let l = 0, r = nums.length-1
    while(l <= r) {
        const mid = Math.floor(l + (r-l)/2)
        if (nums[mid] === target) {
            return mid
        }
        if (nums[mid] < target) { // too small
            l = mid+1
        }else{ // too big
            r = mid-1
        }
    }
    // haha easy way except O(N) instead of O(logN)
    // const map = {}
    // for(let i = 0; i < nums.length; i++) {
    //     map[nums[i]] = i
    // }
    // if (target in map) {
    //     return map[target]
    // }
    return -1
};