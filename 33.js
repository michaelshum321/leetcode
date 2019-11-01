// 33. Search in Rotated Sorted Array
// https://leetcode.com/problems/search-in-rotated-sorted-array/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    if (!nums || !nums.length) {
        return -1
    }
    if (nums.length === 1) {
        return nums[0] === target ? 0 : -1
    }
    let max = 0
    let l = 0, r = nums.length-1
    while(l <= r) {
        const mid = Math.floor(l + (r-l)/2)
        if (nums[max] > nums[mid]) {
            r = mid-1
        }else{
            max = mid
            l = mid+1
        }
    }
    
    let min = (max+1)%nums.length
    l = 0
    r = nums.length-1
    while(l <= r){
        const m = Math.floor(l+(r-l)/2)
        const mid = (min+m)%nums.length

        if (nums[mid] === target) {
            return mid
        }
        if (nums[mid] < target) { 
            l = m+1
        }else { // nums[mid] >= target
            r = m-1
        }
    }
    return -1
};