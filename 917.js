// 917. Reverse Only Letters
// https://leetcode.com/problems/reverse-only-letters/

/**
 * @param {string} S
 * @return {string}
 */
var reverseOnlyLetters = function(S) {
    let left = findForward(S,0), right = findBackward(S,S.length-1)
    while(left < right) {
        // swap left and right chars
        const l = S[left]
        S = replaceChar(S, left, S[right])
        S = replaceChar(S, right, l)
        left = findForward(S,left+1)
        right = findBackward(S,right-1)
    }
    return S
};
const replaceChar = (str, idx, c) => {
    return str.substr(0,idx) + c + str.substr(idx+1)
}
const isChar = (c) => {
    return c.toUpperCase() !== c.toLowerCase()
}
const findForward = (str, idx) => {
    for(let i = idx; i < str.length; i++) {
        if (isChar(str[i])) {
            return i
        }
    }
    return str.length
}

const findBackward = (str, idx) => {
    for(let i = idx; i >= 0; i--) {
        if (isChar(str[i])) {
            return i
        }
    }
    return -1
}