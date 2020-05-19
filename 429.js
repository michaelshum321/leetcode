/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[][]}
 */

// BFS
var levelOrder = function(root) {
    if (!root) {
        return []
    }
    
    let ans = []
    let queue = [root]
    let levelAns = []
    while(queue.length) {
        const len = queue.length
        for(let i = 0; i < len; i++) {
            const node = queue.shift()
            levelAns.push(node.val)
            node.children.forEach(c => queue.push(c))
        }
        ans.push(levelAns)
        levelAns = []
    }
    return ans
};
