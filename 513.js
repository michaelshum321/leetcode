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
 * @return {number}
 */

// BFS final iteration
var findBottomLeftValue = function(root) {
    let queue = [root]
    let node
    while(queue.length) {
        node = queue.shift()
        if (node.right) queue.push(node.right) 
        if (node.left) queue.push(node.left)
    }
    // the last element taken off queue is the leftmost value
    return node.val
};

// BFS first iteration
var findBottomLeftValue = function(root) {
    let queue = [root]
    let temp = []
    let lastLevel = [root]
    while(queue.length) {
        const node = queue.shift()
        if (node.left) {
            temp.push(node.left)
        }
        
        if (node.right) {
            temp.push(node.right)
        }
        
        if (!queue.length) {
            if (temp.length) lastLevel = [...temp]
            queue = temp
            temp = []
        }
    }
    
    return lastLevel[0].val
};
