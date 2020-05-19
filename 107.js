/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */

// BFS 
var levelOrderBottom = function(root) {
    if (!root) {
        return []
    }
    
    let queue = [root]
    let temp = []
    let ans = []
    let levelAns = []
    while(queue.length || temp.length) {
        const node = queue.shift()
        levelAns.push(node.val)
        if (node.left) {
            temp.push(node.left)
        }
        
        if (node.right) {
            temp.push(node.right)
        }
        if (!queue.length) {
            ans.push(levelAns)
            levelAns = []
            queue = temp
            temp = []
        }
    }
    return ans.reverse()
};
