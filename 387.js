// 387. First Unique Character in a String
// https://leetcode.com/problems/first-unique-character-in-a-string/

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    const count = {}
    for(let i = 0; i < s.length; i++) {
        const c = s[i]
        if (c in count) {
            count[c] = true
        }else {
            count[c] = false
        }
    }
    for(let i = 0; i < s.length; i++) {
        const c = s[i]
        if (count[c] === false) {
            return i
        }
    }
    return -1
};