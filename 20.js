// 20. Valid Parentheses
// https://leetcode.com/submissions/detail/257792116/
/**
 * @param {string} s
 * @return {boolean}
 */
const openMap = {'(':')', '{':'}','[':']'}
const closeMap = {')':true,'}':true,']':true}
var isValid = function(s) {
    const stack = []
    if (s.length % 2 == 1) {
        return false
    }
    for(let i = 0; i < s.length; i++) {
        if (s[i] in closeMap) {
            if (!stack.length) {
                return false
            }
            const last = stack.pop()
            if (openMap[last] !== s[i]) {
                return false
            }
        }else if (s[i] in openMap) {
            stack.push(s[i])
        }
    }
    if (stack.length) {
        return false
    }
    return true
};