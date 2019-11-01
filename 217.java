// 217. Contains Duplicate
// https://leetcode.com/problems/contains-duplicate/
class Solution {
    HashSet set = new HashSet<Integer>();
    public boolean containsDuplicate(int[] nums) {
        for(int i = 0; i < nums.length; i++) {
            if (set.contains(nums[i])) {
                return true;
            }
            set.add(nums[i]);
        }
        return false;
    }
}