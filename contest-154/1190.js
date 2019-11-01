// 1190. Reverse Substrings Between Each Pair of Parentheses
// https://leetcode.com/contest/weekly-contest-154/problems/reverse-substrings-between-each-pair-of-parentheses/
/**
 * @param {string} s
 * @return {string}
 */
var reverseParentheses = function(s) {
    if (!s || s.length === 1) {
        return s
    }
    const stack = []
    let ret = ''
    for(let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            stack.push('')
        }else if (s[i] === ')') {
            if (stack.length === 1) {
                ret += revStr(stack.pop())
            } else {
                stack[stack.length-2] += revStr(stack.pop())
            }
        }else{
            if (!stack.length) {
                ret += s[i]
            }else{
                stack[stack.length-1] += s[i]
            }
        }
    }
    return ret
};
const revStr = (str) => {
    let ret = ''
    for(let i = str.length-1; i>= 0; i--) {
        ret += str[i]
    }
    return ret
}