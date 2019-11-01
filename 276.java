// 374. Guess Number Higher or Lower
// https://leetcode.com/problems/guess-number-higher-or-lower/

/* The guess API is defined in the parent class GuessGame.
   @param num, your guess
   @return -1 if my number is lower, 1 if my number is higher, otherwise return 0
      int guess(int num); */

public class Solution extends GuessGame {
    public int guessNumber(int n) {
        int l = 1;
        int r = n;
        while(l <= r) {
            int mid = l + (r-l)/2;
            int g = guess(mid);
            if (g == 0) {
                return mid;
            }else if (g == 1) {
                l = mid + 1;
            }else {
                r = mid - 1;
            }
        }
        return 1;
    }
}