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
// https://leetcode.com/problems/intersection-of-two-linked-lists/
function getSize(head: ListNode | null) : number{
    let temp = head;
    let size = 0;
    while(temp != null){
        size++;
        temp = temp.next;
    }
    return size;
}

function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
    let sz1 = getSize(headA);
    let sz2 = getSize(headB);

    // Make sizes equal
    let tempA = headA;
    let tempB = headB;

    while(sz1 != sz2){
        if(sz1 > sz2){
            tempA = tempA.next;
            sz1--;
        }else{
            tempB = tempB.next;
            sz2--;
        }
    }

    //Now both sizes will be equal. move points together until they come on same node
    while(tempA != null && tempB != null){
        if(tempA == tempB){
            return tempA;
        }
        tempA = tempA.next;
        tempB = tempB.next;
    }
    return null;//When there is no intersection point
};

