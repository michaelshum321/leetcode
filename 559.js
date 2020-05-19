/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number}
 */

// BFS
var maxDepth = function(root) {
    if (!root) {
        return 0
    }
    
    let queue = [root]
    let temp = []
    let depth = 0
    
    while(queue.length) {
        // bfs
        const node = queue.shift()
        
        node.children.forEach(c => temp.push(c))
        
        if (!queue.length) {
            depth++
            queue = temp
            temp = []
        }
    }
    return depth
};


// DFS
var maxDepth = function(root) {
    if (!root) {
        return 0
    }
    
    return dfs(root, 1)
};


var dfs = function(node, depth) {
    if (!node.children.length) {
        return depth
    }
    
    const depths = node.children.map(c => dfs(c, depth+1))
    // this works too.
    // return depths.reduce((acc, curr) => Math.max(acc, curr))
    return Math.max(...depths)
}


