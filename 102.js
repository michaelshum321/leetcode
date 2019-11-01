// 102. Binary Tree Level Order Traversal
// https://leetcode.com/problems/binary-tree-level-order-traversal/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root, h = 1, output = []) {
    if (!root) {
        return []
    }
    
    if (!((h-1) in output)) {
        output.push([])
    }
    
    output[h-1].push(root.val)
    if (root.left) {
        levelOrder(root.left, h+1, output)
    }
    if (root.right){
        levelOrder(root.right, h+1, output)
    }
    return output
};