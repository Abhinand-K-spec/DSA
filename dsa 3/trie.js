class trieNode{
    constructor(){
        this.children = {}
        this.isEnd = false;
    }
}

class trie{
    constructor(){
        this.root = new trieNode();
    }

    insert(word){
        let node = this.root;
        for(let ch of word){
            if(!node.children[ch]){
                node.children[ch] = new trieNode();
            }
            node = node.children[ch];
        }
        node.isEnd = true;
    }

    search(word){
        let node = this.root;
        for(let ch of word){
            if(!node.children[ch]){
                return false;
            }
            node = node.children[ch];
        }
        return node.isEnd;
    }

    startsWith(prefix){
        let node = this.root;
        for(let ch of prefix){
            if(!node.children[ch]){
                return false;
            }
            node = node.children[ch];
        }
        return true;
    }



    autocomplete(prefix){
        let node = this.root;
        for(let ch of prefix){
            if(!node.children[ch]){
                return [];
            }
            node = node.children[ch];
        }
        let result = [];
        this.collect(node,prefix,result);
        return result;
    }

    collect(node,prefix,result){
        if(node.isEnd){
            result.push(prefix);
        }
        for(let ch in node.children){
            this.collect(node.children[ch],prefix+ch,result);
        }
    }

    delete(word){
        const deleteHelper = (node,word,index)=>{
            if(index===word.length){
                if(!node.isEnd) return false;
            node.isEnd = false;
            return  Object.keys(node.children).length===0;
        }
            let ch = word[index];
            let child = node.children[ch];
            if(!child) return false;

            let shouldDelete = deleteHelper(child,word,index+1);

            if(shouldDelete){
                delete node.children[ch];
            }

            return (
                Object.keys(node.children).length==0 &&
                node.isEnd===false
            );
        }
        deleteHelper(this.root,word,0);
    }

}