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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    if (!root) {
        return []
    }
    const ans = []
    dfs(root, [root.val], ans)
    return ans
};

// DFS final iteration (do not make new array per each dfs call)
var dfs = function(node, prefix, ans) {
    if (node.left) {
        prefix.push(node.left.val)
        dfs(node.left, prefix, ans)
    }
    
    if (node.right) {
        prefix.push(node.right.val)
        dfs(node.right, prefix, ans)
    }
    
    if (!node.right && !node.left) {
        ans.push(prefix.join('->'))
    }
    prefix.pop()
}

// DFS first iteration
var dfs = function(node, prefix, ans) {
    if (node.left) {
        dfs(node.left, [...prefix, node.left.val], ans)
    }

    if (node.right) {
        dfs(node.right, [...prefix, node.right.val], ans)
    }

    if (!node.right && !node.left) {
        ans.push(prefix.join('->'))
    }
}
