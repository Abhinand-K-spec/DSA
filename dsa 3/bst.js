class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}


class BST{
    constructor(){
        this.root = null;
    }
    
    insert(value){
        let node = new Node(value);
        if(!this.root){
            this.root = node;
            return;
        }
        let current = this.root;
        while(true){
            if(current.value>value){
                if(!current.left){
                    current.left = node;
                    return;
                }
                current = current.left;
            }else if(current.value<value){
                if(!current.right){
                current.right = node;
                return;
            }
            current = current.right;
            }else{return} 
        }
    }
    
    
    inorder(node = this.root){
        if(!node) return;
        this.inorder(node.left);
        console.log(node.value);
        this.inorder(node.right)
    }
    
    preorder(node = this.root){
        if(!node) return;
        console.log(node.value);
        this.preorder(node.left);
        this.preorder(node.right);
    }
    
    postorder(node = this.root){
        if(!node) return;
        this.postorder(node.left);
        this.postorder(node.right);
        console.log(node.value);
    }
    
    
}



let bst = new BST();
bst.insert(9);
bst.insert(6);
bst.insert(17);
bst.insert(12);
bst.postorder()


