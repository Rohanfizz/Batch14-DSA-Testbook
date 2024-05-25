//https://leetcode.com/problems/search-in-a-binary-search-tree/
function searchBST(node: TreeNode | null,target: number): TreeNode | null {
    if(node == null) return null;
    if(node.val == target) return node;
    else if(target < node.val) return searchBST(node.left,target);
    else if(target > node.val) return searchBST(node.right,target);
};