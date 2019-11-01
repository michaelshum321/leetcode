// 69. Sqrt(x)
// https://leetcode.com/problems/sqrtx/

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if (x === 0) {
        return 0
    }
    if (x === 1) {
        return 1
    }
    let l = 1, r = x
    while(l <= r) {
        const mid = Math.floor(l + (r-l)/2)
        if (x/mid < mid) { // mid is too big
            r = mid-1
        }else{ // mid is too small, mid is equal, or mid is correct
            const next = mid+1
            if (next > x/next) {
                return mid
            }
            l = mid+1
        }
    }
};