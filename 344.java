// 344. Reverse String
// https://leetcode.com/problems/reverse-string/

class Solution {
    public void reverseString(char[] s) {
        rev(s,0, s.length - 1);
    }
    private void rev(char[] s, int lower, int higher) {
        if (lower >= higher) {
            return;
        }
        // fun with not using temp var
        s[higher] ^= s[lower]; //s[h] has s[l] and s[h]
        s[lower] ^= s[higher]; // s[l] has s[h]
        s[higher] ^= s[lower]; // s[h] has s[l]
        rev(s, lower+1, higher-1);
        return;
    }
}