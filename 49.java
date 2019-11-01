// 49. Group Anagrams
// https://leetcode.com/problems/group-anagrams/
class Solution {
    public List<List<String>> groupAnagrams(String[] strs) {
        HashMap<String, List<String>> hm = new HashMap();
        for(int i = 0; i < strs.length; i++) {
            char[] chars = strs[i].toCharArray();
            Arrays.sort(chars);
            String sorted = String.valueOf(chars);
            if (!hm.containsKey(sorted)) {
                hm.put(sorted,new LinkedList<String>());
            }
            List<String> l = hm.get(sorted);
            l.add(strs[i]);
        }
        return new ArrayList<List<String>>(hm.values());   
    }
}