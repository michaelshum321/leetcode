/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */

// simple binary search
var guessNumber = function(n) {
    
    
    let lower = 1
    let upper = n
    
    while (lower <= upper) {
        let mid = lower + Math.floor((upper-lower)/2)
        let output = guess(mid)
        if (output == 0) {
            return mid
        } else if (output < 0) {
            upper = mid-1
        } else {
            lower = mid+1
        }
    }
    
    return -1
};
