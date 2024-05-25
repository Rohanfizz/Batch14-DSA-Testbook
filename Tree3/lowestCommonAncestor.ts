
function nodeToRootPath(node: TreeNode | null, target: number): TreeNode[] {
    if(node == null) return [];
    if(node.val == target) return [node]

    // Node is not null and value is not equal to target
    // Node which will have to find answers from the children
    let leftArr = nodeToRootPath(node.left,target)
    if(leftArr.length > 0){
        leftArr.push(node)
        return leftArr;
    }

    let rightArr = nodeToRootPath(node.right,target)
    if(rightArr.length > 0){
        rightArr.push(node)
        return rightArr
    }
    return [];
}

function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
	if(root == null) return null;
    let Pntrp = nodeToRootPath(root,p.val)
    let Qntrp = nodeToRootPath(root,q.val)
    let i = Pntrp.length-1;
    let j = Qntrp.length-1;
    while(i>=0 && j>=0 && Pntrp[i] == Qntrp[j]){
        i--;
        j--;
    }
    return Pntrp[i+1];
};