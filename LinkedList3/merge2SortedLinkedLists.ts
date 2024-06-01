/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
//https://leetcode.com/problems/merge-two-sorted-lists/
function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    let t1 = list1;
    let t2 = list2;

    let dummy = new ListNode(-1);
    let curr = dummy;

    while(t1 != null && t2 != null){
        if(t1.val <= t2.val){
            curr.next = t1;
            t1 = t1.next;
        }else{
            curr.next = t2;
            t2 = t2.next;
        }
        curr = curr.next;
    }
    
    if(t1 == null){
        curr.next = t2;
    }else{
        curr.next = t1;
    }
    return dummy.next;
};











