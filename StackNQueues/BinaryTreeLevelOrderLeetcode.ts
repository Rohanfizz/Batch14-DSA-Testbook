/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function levelOrder(root: TreeNode | null): number[][] {
    if(root == null) return [];
    let q : TreeNode[] = [];
    q.push(root);

    let ans : number[][] = [];

    while(q.length > 0){
        let currlevelSize = q.length;
        let currlevel :number[] = [];

        while(currlevelSize >0){
            let currNode = q.shift();
            currlevel.push(currNode.val);
            if(currNode.left != null) q.push(currNode.left);
            if(currNode.right != null) q.push(currNode.right);
            currlevelSize--;
        }
        ans.push(currlevel)
    }
    return ans;
};


