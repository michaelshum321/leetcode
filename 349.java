// 349. Intersection of Two Arrays
// https://leetcode.com/problems/intersection-of-two-arrays/
class Solution {
    public int[] intersection(int[] nums1, int[] nums2) {
        HashMap<Integer,Integer> map = new HashMap();
        List<Integer> output = new ArrayList();
        for(int i = 0; i < nums1.length; i++) {
            map.putIfAbsent(nums1[i],0);
            map.compute(nums1[i], (k,v)->v+1);
        }
        
        for(int i = 0; i < nums2.length; i++) {
            Integer val = map.get(nums2[i]);
            if (val == null || val.equals(0)){ // if val is not in num1 or already been processed
                continue;
            }
            output.add(nums2[i]);
            map.put(nums2[i],0);
        }

        return output
                .stream()
                .mapToInt(Integer::intValue)
                .toArray();
    }
}