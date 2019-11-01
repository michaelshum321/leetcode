// 104. Maximum Depth of Binary Tree
// https://leetcode.com/problems/maximum-depth-of-binary-tree/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    return !root ? 0 : mD(root, 1)
};

const mD = (root, h) => {
    let leftHeight = h
    if (root.left) {
        leftHeight = mD(root.left, h+1)
    }
    
    let rightHeight = h
    if (root.right) {
        rightHeight = mD(root.right, h+1)
    }
    return (leftHeight > rightHeight) ? leftHeight : rightHeight
}