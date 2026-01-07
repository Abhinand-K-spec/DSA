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



    deleteElem(value){
        this.root = this.remove(this.root,value);
    }

    remove(node,value){
        if(!node)return null;
        if(node.value>value){
            node.left = this.remove(node.left,value);
        }else if(node.value<value){
            node.right = this.remove(node.right,value);
        }else{
            if(!node.left) return node.right;
            if(!node.right) return node.left;

            let min = this.minNode(node.right);
            node.value = min.value;
            node.right = this.remove(node.right,min.value);
        }

        return node;
    }
    

    minNode(node){
        if(!node) return null;
        while(node.left){
            node = node.left;
        }
        return node;
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


    closest(target){
        let current = this.root;
        let closest = this.root.value;
        while(current){
            if(Math.abs(target - current.value) < Math.abs(target - closest.value)){
                closest = current.value;
            }if(target<current.value){
                current = current.left;
            }else if(target>current.value){
                current = current.right;
            }else{
                return current.value;
            }
        }return closest;
    }
    

    isValid(node=this.root,min = -Infinity, max = Infinity){
        if(!node) return true;
        if(node.value<=min || node.value>=max){
            return false;
        }
        return this.isValid(node.left,min,node.value) && 
        this.isValid(node.right,node.value,max);
    }
    
}



let bst = new BST();
bst.insert(9);
bst.insert(6);
bst.insert(17);
bst.insert(12);
bst.delete(9)
console.log(bst.isValid())



