//https://www.geeksforgeeks.org/problems/size-of-binary-tree/1?itm_source=geeksforgeeks&itm_medium=article&itm_campaign=bottom_sticky_on_article
function getSize(node) {
    // code here
    if(node == null) return 0;
    let leftSize = this.getSize(node.left);
    let rightSize = this.getSize(node.right);
    return leftSize + rightSize + 1;
}