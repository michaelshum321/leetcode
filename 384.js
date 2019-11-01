//384. Shuffle an Array
//https://leetcode.com/problems/shuffle-an-array/
/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
    this.orig = nums
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function() {
    return this.orig
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
    const done = {}
    const res = []
    for(let i = 0; i < this.orig.length; i++) {
        while(true) {
            const idx = Math.floor(Math.random()*this.orig.length)
            if (idx in done) {
                continue
            }
            done[idx] = true
            res.push(this.orig[idx])
            break
        }
    }
    return res
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */