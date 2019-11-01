// 98. Validate Binary Search Tree
// https://leetcode.com/problems/validate-binary-search-tree/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
    if (!root) {
        return true
    }
    const res = isValid(root)
    return res
};
const isValid = (root, l = null, r = null) => {
    
    if (l !== null && !(l < root.val)) return false
    if (r !== null && !(root.val < r)) return false
    
    if (root.left && !isValid(root.left, l, root.val)){
        return false
    }
    if (root.right && !isValid(root.right, root.val, r)) {
        return false
    }
    
    return true
}
