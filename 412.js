// 412. Fizz Buzz
// https://leetcode.com/problems/fizz-buzz/
/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    const out = []
    for(let i = 1; i <= n; i++) {
        if (i%3 === 0 && i%5 === 0){
            out.push('FizzBuzz')
            continue
        }else if (i%3 === 0) {
            out.push('Fizz')
            continue
        }else if (i%5 === 0) {
            out.push('Buzz')
            continue
        }else{
            out.push(i.toString())
        }
    }
    return out
};