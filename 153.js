// 153. Find Minimum in Rotated Sorted Array
// https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    // only 1 item, so only item is min, or case 1: first elem < last elem means always increasing
    if (nums.length === 1 || nums[0] < nums[nums.length-1]) {
        return nums[0]
    }
    let l = 0, r = nums.length-1
    while(l <= r) {
        const mid = Math.floor(l + (r-l)/2)
        if (nums[0] > nums[mid]) {
            r = mid-1
        }else{
            l = mid+1
        }    
    }
    return nums[l]
};
