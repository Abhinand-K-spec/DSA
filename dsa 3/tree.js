// class treeNode{
//     constructor(value){
//         this.value = value;
//         this.children = [];
//     }
// }


// let root = new treeNode('1');
// let child1 = new treeNode('a');
// let child2 = new treeNode('b');
// root.children.push(child1);
// root.children.push(child2)



// function dfs(node){
//     if(!node) return null;
//     console.log(node.value);
//     for(let child of node.children){
//         dfs(child);
//     }
// }


// // dfs(root)



// function bfs(node){
//     let q = [node];
//     while(q.length>0){
//         let curr = q.shift();
//         console.log(curr.value)
//         for(let child of curr.children){
//             q.push(child);
//         }
//     }
// }

// bfs(root)





// class treeNode{
//     constructor(value){
//         this.value = value;
//         this.children = [];
//     }

//     addChild(value){
//         let node = new treeNode(value);
//         this.children.push(node);
//         return node;
//     }
// }


// let root = new treeNode('1');
// let n1 = root.addChild('a')
// let n2 = root.addChild('b');

// bfs(root)







//bst-----------------------------------------------------------

class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}


class bst{
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
            }else{
                return;
            }
        }
    }


    display(){
        console.log(this.root)
    }

    contains(value){
        let current = this.root;
        while(current){
            if(current.value===value) return true;
            else if(current.value>value) current = current.left;
            else current = current.right;
        }
        return false;
    }

    minVal(node){
        let current = node;
        while(current.left!==null){
            current = current.left;
        }
        return current;
    }


    delete(root,key){
        if(!root) return null;
        if(root.value>key){
            root.left = this.delete(root.left,key);
        }else if(root.value<key){
            root.right = this.delete(root.right,key);
        }else{
            if(!root.left && !root.right){
                return null;
            }
            if(!root.left){
                return root.right;
            }
            if(!root.right){
                return root.left;
            }
            let successor = this.minVal(root.right);
            root.value = successor.value;
            root.right = this.delete(root.right,successor.value);
        }
        return root;
    }
}


let b = new bst();
b.insert(5);
b.insert(6);
b.insert(7);
b.insert(8);
b.insert(9);
b.insert(0);
b.root = b.delete(b.root,5);
console.log(b.contains(5))