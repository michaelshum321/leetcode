// 28. Implement strStr()
// https://leetcode.com/problems/implement-strstr/
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    // if (!needle.length){
    //     return 0
    // }
    // return haystack.search(needle)   
    let i = 0
    if (!needle.length){
        return 0
    }
    while(i < haystack.length) {
        if (haystack[i] === needle[0]) {
            let good = true
            for(let j = i+1,k=1; k < needle.length; j++,k++) {
                if (j === haystack.length || haystack[j] !== needle[k]) {
                    good = false
                    break
                }
            }
            if (good) {
                return i
            }
        }
        i++
    }
    return -1
};