//https://leetcode.com/problems/maximum-depth-of-binary-tree/
function maxDepth(node: TreeNode | null): number {
    if(node == null) return 0;

    let leftHeight = maxDepth(node.left);
    let rightHeight = maxDepth(node.right);

    let maxHeight = Math.max(leftHeight,rightHeight)
    return maxHeight + 1;
};