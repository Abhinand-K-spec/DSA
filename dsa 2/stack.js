// class stack{
//     constructor(){
//         this.stack = [];
//     }

//     push(x){
//         this.stack.push(x);
//     }

//     pop(){
//         if(this.stack.length==0){
//             console.log('empty');
//             return null;
//         }
//         return this.stack.pop();
        

//     }

//     peak(){
//             if(this.stack.length==0){
//                     console.log('empty');
//                     return null;
//                 }
//         return this.stack[this.stack.length-1];
//     }
//     isEmpty(){
//         return this.stack.length===0;
//     }
//     display(){
//         for(let i=this.stack.length-1;i>=0;i--){
//             console.log(this.stack[i]);
//         }
//     }
// }


// let s = new stack();
// s.push(4)
// s.push(5)
// s.push(6)
// s.push(7)
// s.push(8)
// s.pop();
// s.display();




// class Node{
//     constructor(data){
//         this.data = data;
//         this.next = null;
//     }
// }

// class stackll{
//     constructor(){
//         this.top = null;
//     }

//     push(x){
//         let node = new Node(x);
//         node.next = this.top;
//         this.top = node;
 
//     }
//     pop(){
//         if(this.isEmpty){
//             console.log('emptystack')
//         }
//         let popped = this.top;
//         this.top = this.top.next;
//         return popped;
//     }

//     peak(){
//         if(this.isEmpty){
//             console.log('emptystack')
//         }
//         return this.top.data;
//     }

//     isEmpty(){
//         return this.stack.top === null;
//     }

//     display(){
//         let current = this.top;
//         while(current){
//             console.log(current.data);
//             current = current.next;
//         }
//      }
// }

// let s = new stackll();
// s.push(4)
// s.push(5)
// s.push(6)
// s.push(7)
// s.push(8)
// console.log(s.peak())
// s.display();



// convertong recursion to stack -----------------------------------

// function printton(n){
//     let stack = [];
//     while(n>0){
//         stack.push(n);
//         n--;
//     }
//     while(stack.length>0){
//         console.log(stack.pop());
//     }
// }

// printton(9)



// function facto(n){
//     let stack = [];
//     while(n>0){
//         stack.push(n);
//         n--;
//     }
//     let result = 1;
//     while(stack.length>0){
//         result *= stack.pop();
//     }
//     return result;
// }

// console.log(facto(6));




