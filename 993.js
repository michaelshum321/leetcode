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
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */

// BFS final iter.
// instead of checking last level, check if x and y are both present while iterating.
var isCousins = function(root, x, y) {
    if (!root) {
        return false
    }

    let queue = [root]
    let temp = []
    let xExist = false
    let yExist = false
    while(queue.length) {
        let node = queue.shift()

        if (node.left && node.right) {
            if ((node.left.val == x && node.right.val == y) ||
                (node.left.val == y && node.right.val == x)){
                return false
            }
        }

        if (node.val == x) xExist = true
        if (node.val == y) yExist = true

        if (node.left) {
            temp.push(node.left)
        }

        if (node.right) {
            temp.push(node.right)
        }

        if (!queue.length) {
            queue = temp
            temp = []

            if (yExist && xExist) {
                return true
            }else if (!yExist && !xExist) {

            }else{
                return false
            }
        }
    }
};


// BFS first iteration. lots of room to optimize
var isCousins = function(root, x, y) {
    if (!root) {
        return false
    }
    
    // bfs
    
    let queue = [root]
    let temp = []
    while(queue.length) {
        let node
        do {
            node = queue.shift()
        } while(node == null && queue.length)
        // base case
        if (node == null && !temp.length) {
            return false
        }else if (node != null) {
            temp.push(node.left)
            temp.push(node.right)
        }

            
        if (!queue.length) {
            queue = temp
            temp = []
            
            // do check when full level traversal is done
            // check if x & y are on same level
            const xIdx = queue.findIndex((it) => it && it.val == x)
            const yIdx = queue.findIndex((it) => it && it.val == y)
            if (xIdx != -1 && yIdx != -1) {
                if (xIdx % 2 == 0) {
                    if (yIdx == xIdx+1){
                        return false
                    }
                }else{
                    if (yIdx == xIdx-1) {
                        return false
                    }
                }
                return true
                // check if siblings 
                // if even (0, 2, 4) check +1 (and queue.length max)
                // if odd, (1, 3, 5) check -1 (and 0 min )
                // else return true
                
                
            }else if (xIdx == -1 && yIdx == -1) {
                // do nothing
            }else{ // x or y was found, but not both. means not cousins.
                return false
            }
        } 
    }
};
