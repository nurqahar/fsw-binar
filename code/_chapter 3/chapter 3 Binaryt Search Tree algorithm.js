// BST - binary search tree
arrays = [5,3,1,4,2];

function search(x,y){
    if(root==null || root.key == key){
        return root;
    }

    //key is GREATER than roots key
    if(root.key<key)
        return search(root.right, key);
    
    //key is SMALLET than roots key
        return search(root.left, key);
    
}
