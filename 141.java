// 141. Linked List Cycle
// https://leetcode.com/problems/linked-list-cycle/

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) {
 *         val = x;
 *         next = null;
 *     }
 * }
 */
public class Solution {
    public boolean hasCycle(ListNode head) {
        HashSet<ListNode> set = new HashSet();
        ListNode it = head;
        while (it != null) {
            if (set.contains(it)) {
                return true;
            }
            set.add(it);
            it = it.next;
        }
        return false;
    }
}