// 278. First Bad Version
// https://leetcode.com/problems/first-bad-version/

/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        if (n === 1) {
            return 1
        }
        let l = 1, r = n
        while(l < r) {
            const mid = Math.floor(l + (r-l)/2)
            if (isBadVersion(mid)) {
                r = mid
            }else{
                l = mid+1
            }
        }
        return l
    };
};