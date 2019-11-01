// 191. Number of 1 Bits
// https://leetcode.com/problems/number-of-1-bits/

// haha
/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    const str = parseInt(n).toString(2)
    const list = str.match(/1/g)
    return !list ? 0 : list.length
};