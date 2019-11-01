// 1189. Maximum Number of Balloons
// https://leetcode.com/contest/weekly-contest-154/problems/maximum-number-of-balloons/

/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) {
    if (!text) {
        return 0
    }
    const map = {b:0, a:0, l:0,o:0, n:0}
    for(let i = 0; i < text.length; i++) {
        if (text[i] in map) {
            map[text[i]]++
        }

    }
    
    if (!map.b || !map.a || !map.l || !map.o || !map.n) {
        return 0
    }
    let max = map.b
    max = max > map.a ? map.a : max
    max = max > map.n ? map.n : max
    max = max > Math.floor(map.l /2) ? Math.floor(map.l /2) : max
    max = max > Math.floor(map.o /2) ? Math.floor(map.o /2) : max
    return max
};

