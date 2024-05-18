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

let preorder : number[] = []
let inorder : number[] = []
let postorder : number[] = []

function dfs(node : TreeNode | null) : void{
    if(node == null) return;

    preorder.push(node.val)
    
    // left
    dfs(node.left);

    inorder.push(node.val);

    // right
    dfs(node.right)

    postorder.push(node.val)
}

dfs(root);

console.log(preorder)
console.log(inorder)
console.log(postorder)
