class minHeap{
    constructor(){
        this.heap = [];
    }

    insert(value){
        this.heap.push(value);
        this.heapifyUp();
    }


    heapifyUp(){
        let index = this.heap.length-1;
        while(index>0){
            let parentIndex = Math.floor((index-1)/2);

            if(this.heap[parentIndex] < this.heap[index]) break;
            [this.heap[parentIndex],this.heap[index]] = [this.heap[index],this.heap[parentIndex]];

            index = parentIndex;
        }
    }

    removeMin(){
        if(this.heap.length===0) return null;
        if(this.heap.length===1) return this.heap.pop();

        let min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown();
        return min;
    }

    heapifyDown(){
        let index = 0;
        while(true){
            let left = (2*index) +1;
            let right  = (2*index) +2;
            let smallest = index;

            if(left<this.heap.length && this.heap[left]<this.heap[smallest] ){
                smallest = left;
            }if(right<this.heap.length && this.heap[right]<this.heap[smallest]){
                smallest = right;
            }if(smallest === index) break;

            [this.heap[index],this.heap[smallest]] = [this.heap[smallest],this.heap[index]];

            index = smallest;
        }
    }

    display(){
        console.log(this.heap)
    }
}




class maxHeap{
    constructor(){
        this.heap = [];
    }

    insert(val){
        this.heap.push(val);
        this.heapifyUp();
    }

    heapifyUp(){
        let index = this.heap.length-1;
        while(index>0){
            let parent = Math.floor((index-1)/2);
             if(this.heap[parent]>=this.heap[index]) break;
             [this.heap[parent],this.heap[index]]=[this.heap[index],this.heap[parent]];
             index = parent;
        }
    }

    remove(x){
        if(this.heap.length===0) return null;
        if(this.heap.length===1) return this.heap.pop();

        let max = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown();
        return max
    }

    heapifyDown(){
        let index = 0;
        while(true){
            let left = index*2+1;
            let right = index*2+2;
            let greatest = index;

            if(left<this.heap.length && this.heap[left]>this.heap[greatest]){
                greatest = left;
            }if(right<this.heap.length && this.heap[right]>this.heap[greatest]){
                greatest = right;
            }if(greatest === index) break;
            [this.heap[greatest],this.heap[index]] = [this.heap[index],this.heap[greatest]];
            index = greatest;

        }
    }

    display(){
        console.log(this.heap);
    }
}


let h = new maxHeap();
h.insert(8);
h.insert(9);
h.insert(7);
h.insert(5);
h.insert(19);
h.insert(0);
h.display()
