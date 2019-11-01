// 94. Binary Tree Inorder Traversal
// https://leetcode.com/problems/binary-tree-inorder-traversal/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root, output = []) {
    // L N R
    if (root === null) {
        return output
    }
    if (root.left) {
        inorderTraversal(root.left, output)
    }
    output.push(root.val)
    if (root.right) {
        inorderTraversal(root.right, output)
    }
    return output
};