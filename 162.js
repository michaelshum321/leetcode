// 162. Find Peak Element
// https://leetcode.com/problems/find-peak-element/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    // optimized
    if (nums.length === 1) {
        return 0
    }
    // other
    let l = 0, r = nums.length-1
    while(l < r) {
        const mid = Math.floor(l + (r-l)/2)
        if (nums[mid] < nums[mid+1]) {
            l = mid + 1
        }else {
            r = mid
        }
    }
    return l // always incrementing
};