
// class queue{
//     constructor(){
//         this.queue = [];
//         this.front = 0;
//         this.rear = 0;
//     }
    
//     enqueue(x){
//         this.queue[this.rear] = x;
//         this.rear++;
//     }
    
//     dequeue(){
//         if(this.isEmpty()) return null;
//         let drop = this.queue[this.front];
//         this.front++;
//         return drop;
//     }
    
//     isEmpty(){
//         return this.rear === this.front;
//     }
//     display() {
//         if (this.isEmpty()) {
//             console.log("Queue is empty");
//             return;
//         }

//         for (let i = this.front; i < this.rear; i++) {
//             console.log(this.queue[i]);
//         }
//     }
// }
// let q = new queue();
// q.enqueue(9);
// q.enqueue(0);
// q.dequeue()
// q.display();




// class Node{
//     constructor(data){
//         this.data = data;
//         this.next = null;
//     }
// }

// class queuell{
//     constructor(){
//         this.front = null;
//         this.rear = null;
        
//     }
    
    
//     enqueue(x){
//         let node = new Node(x);
//         if(this.rear === null){
//             this.front = this.rear = node;
//             return;
//         }
//         this.rear.next = node;
//         this.rear = node;
//     }
    
    
//     dequeue(){
//         if(this.front === null){
//             return null;
//         }
//         let drop = this.front.data;
//         this.front = this.front.next;
//         if(this.front===null){
//             this.rear = null;
//         }
//         return drop;
//     }
    
    
//     display(){
//         let current = this.front;
//         while(current){
//             console.log(current.data);
//             current = current.next;
//         }
//     }
// }



// let ql = new queuell();
// ql.enqueue(4)
// ql.enqueue(5)
// ql.enqueue(6)
// ql.enqueue(7)
// ql.enqueue(8)
// ql.dequeue()
// ql.display()







// //with stack--------------------------------
// class queue{
//     constructor(){
//         this.inStack = [];
//         this.outStack = [];
//     }

//     enqueue(x){
//         this.inStack.push(x);
//     }

//     dequeue(){
//         if(this.inStack.length===0 && this.outStack.length===0){
//             return null;
//         }

//         if(this.outStack.length===0){
//             while(this.inStack.length>0){
//                 this.outStack.push(this.inStack.pop());
//             }
//         }
//         return this.outStack.pop();
//     }
// }
