// Blueprint
class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor(val: number) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

let arr = [5, 2, 6, -1, -1, 3, 4, -1, -1, -1, 7,  9, -1, -1, 8, -1, -1];
let idx = 0;

function constructBinaryTree() : TreeNode | null{
    if(arr[idx] == -1){
        idx++;
        return null;
    }
    // Node
    let me = new TreeNode(arr[idx])
    idx++;
    // left
    me.left = constructBinaryTree();
    // right
    me.right = constructBinaryTree();
    return me;
}

let root : TreeNode | null = constructBinaryTree();
//////////////////////////////////////////////////////////////////////////////


function nodeToRootPath(node: TreeNode | null, target: number): number[] {
    if(node == null) return [];
    if(node.val == target) return [target]

    // Node is not null and value is not equal to target
    // Node which will have to find answers from the children
    let leftArr = nodeToRootPath(node.left,target)
    if(leftArr.length > 0){
        leftArr.push(node.val)
        return leftArr;
    }

    let rightArr = nodeToRootPath(node.right,target)
    if(rightArr.length > 0){
        rightArr.push(node.val)
        return rightArr
    }
    return [];
}
console.log(nodeToRootPath(root,9))