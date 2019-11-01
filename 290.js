// 290. Word Pattern
// https://leetcode.com/problems/word-pattern/
/**
 * @param {string} pattern - 'abba'
 * @param {string} str - 'dog cat cat dog'
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
    const split = str.split(' ')
    const map = {} // pattern char to word
    const used = {} // words used already. should be a set instead of map
    if (pattern.length !== split.length) {
        return false
    }
    for(let i = 0; i < pattern.length; i++) {
        if (!(pattern[i] in map)) {
        	// pattern is new, but word is already tied to an existing pattern
            if (split[i] in used) {
                return false
            }
            // pattern is new and word is not tied to a pattern
            map[pattern[i]] = split[i]
            used[split[i]] = true
        }
        // check if current word matches pattern char's mapped word
        if (map[pattern[i]] !== split[i]) {
            return false
        }
    }
    return true
};

// Tests