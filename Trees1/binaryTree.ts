// Blueprint
class TreeNode {
    val: number;
    leftChild: TreeNode | null;
    rightChild: TreeNode | null;
    constructor(val: number) {
        this.val = val;
        this.leftChild = null;
        this.rightChild = null;
    }
}

let arr = [50, 20, 10, -1, -1, 40, -1, -1, 30, 11, -1, -1, -1];
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
    me.leftChild = constructBinaryTree();
    // right
    me.rightChild = constructBinaryTree();
    return me;
}

function displayTree(node:TreeNode | null){
    if(node == null) return;

    let s = "";
    s += node.val+": "+node.leftChild?.val+", "+node.rightChild?.val
    console.log(s)

    displayTree(node.leftChild)
    displayTree(node.rightChild)
}

let root = constructBinaryTree();
displayTree(root)
