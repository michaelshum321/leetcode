// 367. Valid Perfect Square
// https://leetcode.com/problems/valid-perfect-square/

/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    if (num === 1) {
        return 1
    }
    let l = 1, r = Math.floor(num/2)
    while(l <= r) {
        const mid = Math.floor(l + (r-l)/2)
        if (mid*mid === num) {
            return true
        }
        if (mid*mid < num) {
            l = mid+1
        }else{ // mid^2 > num
            r = mid-1
        }
    }
    return false
};