// 448. Find All Numbers Disappeared in an Array
// https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    const map = {}
    const output = []
    for(let i = 0; i < nums.length; i++) {
        map[nums[i]] = true
    }
    
    for(let i = 1; i <= nums.length; i++) {
        if (!(i in map)) {
            output.push(i)
        }
    }
    return output
};