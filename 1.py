class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        checked = {}
        for i, val in enumerate(nums):
            if (target - val) in checked:
                return [checked[target - val], i]
            checked[val] = i

