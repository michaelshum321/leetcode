// 101. Symmetric Tree
// https://leetcode.com/problems/symmetric-tree/
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 */
class Solution {
    // public boolean isSymmetric(TreeNode root) {
    //     // preorder N L R should match N R L
    //     return isSym(root,root);
    // }
    // public boolean isSym(TreeNode left, TreeNode right) {
    //     if (left == null && right == null) {
    //         return true;
    //     }
    //     if (left == null || right == null) {
    //         return false;
    //     }
    //     if (left.left != null) {
    //         if (right.right == null || right.right.val != left.left.val) {
    //             return false;
    //         }
    //     }
    //     if (left.right != null) {
    //         if (right.left == null || right.left.val != left.right.val) {
    //             return false;
    //         }
    //     }
    //     return isSym(left.left, right.right) && isSym(left.right, right.left);
    // }
    class Solution {
    public boolean isSymmetric(TreeNode root) {
        // preorder N L R should match N R L
        return isSym(root,root);
    }
    public boolean isSym(TreeNode left, TreeNode right) {
        if (left == null && right == null) {
            return true;
        }
        if (left == null || right == null || left.val != right.val) {
            return false;
        }
        return isSym(left.left, right.right) && isSym(left.right, right.left);
    }  
}  
}