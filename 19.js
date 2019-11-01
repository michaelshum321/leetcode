// 19. Remove Nth Node From End of List
// https://leetcode.com/problems/remove-nth-node-from-end-of-list/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let len = 0
    let it = head
    let prev
    while(it) {
        it = it.next
        len++
    }
    
    it = head
    for(let i = 0; i < (len-n); i++) {
        prev = it
        it = it.next
    }
    if (!prev){
        if (head.next) {
            return head.next
        }else{
            return null
        }
    }else if(!it.next) {
        prev.next = null
    } else{
        prev.next = it.next
    }
    return head
};