// 94. Binary Tree Inorder Traversal
// https://leetcode.com/problems/binary-tree-inorder-traversal/

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
    List<Integer> out = new LinkedList();
    public List<Integer> inorderTraversal(TreeNode root) {
        traverse(root);
        return out;
    }
    private void traverse(TreeNode root) {
        if (root == null) {
            return;
        }
        
        traverse(root.left);
        out.add(root.val);
        traverse(root.right);
    }
}