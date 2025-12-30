// let memo = {};
// function fib(n){
//     if(n<=1) return n;
//     if(memo[n]) return memo[n];
//     return memo[n] = fib(n-1)+fib(n-2);
// }

// console.log(fib(6));


// function print(n){
//     if(n===0) return;
//      print(n-1);
//      console.log(n);
    
// }

// print(5)


// function sum(n){
//     if(n<=1) return n;
//     return n+sum(n-1);
// }

// console.log(sum(5))


// function power(x,n){
//     if(n==0) return 1;
//     return x*(power(x,n-1))
// }

// console.log(power(2,2))


// function rev(n,res=0){
//     if(n==0) return res;
//     return rev(Math.floor(n/10),res=res*10+(n%10))
    
// }

// console.log(rev(456));

// function revs(s){
//     if(s==='') return '';
//     return revs(s.slice(1))+s[0];
// }

// console.log(revs('hellow'))


// function sumn(n,res=0){
//     if(n<=1) return res;
//     return sumn(Math.floor(n/10),res=res+(n%10))
// }

// console.log(sumn(432))



// function palindrome(s,left=0,right=s.length-1){
//     if(left>=right) return true;
//     if(s[left]!==s[right]) return false;
//     return palindrome(s,left+1,right-1);
// }

// console.log(palindrome('madmam'))




// function rev(n,res=0){
//     if(n===0) return res;
//     return rev(Math.floor(n/10),res=res*10+(n%10))
// }

// function pal(n){
//     return n===rev(n)
// }

// console.log(pal(22))




// function sumarr(arr,index=0){
//     if(arr.length==index){ return 0};
//     return arr[index] + sumarr(arr,index+1);
// }

// console.log(sumarr([1,2,3,4,5]));


// function binarysrch(arr,target,left=0,right=arr.length-1){
//     if(left>right) return -1;
    
//     let mid = Math.floor((left+right)/2);
    
//     if(arr[mid]===target) return mid;
    
//     return arr[mid]>target?binarysrch(arr,target,left,mid-1):binarysrch(arr,target,mid+1,right)
// }

// console.log(binarysrch([1,2,3,4,5],5));



// class Node {
//   constructor(data) {
//     this.data = data;
//     this.next = null;
//   }
// }

// class LinkedList {
//   constructor() {
//     this.head = null;
//   }

//     append(data){
//         let newnode = new Node(data)
//         if(!this.head){
//            this.head = newnode;
//            return;
//       }
//       let curr = this.head;
//       while(curr.next){
//           curr = curr.next;
//       }
//       curr.next = newnode;
//       return;
//     }

//   prepend(data) {
//     const newNode = new Node(data);
//     newNode.next = this.head;
//     this.head = newNode;
//   }

//   print() {
//     let curr = this.head;
//     while (curr) {
//       console.log(curr.data);
//       curr = curr.next;
//     }
//   }
// }

// const list = new LinkedList();
// list.append(10);
// list.append(20);
// list.prepend(5);
// list.print();




// class Node{
//     constructor(data){
//         this.data = data;
//         this.next = null;
//     }
// }

// class LinkedList{
//     constructor(){
//         this.head = null;
//     }
//     append(data){
//         let newNode = new Node(data);
//         if(!this.head){
//             this.head = newNode;
//             return;
//         }
//         let curr = this.head;
//         while(curr.next){
//             curr = curr.next;
//         }
//         curr.next = newNode;
//         return;
//     }
//     prepend(data){
//         let newNode = new Node(data);
//         newNode.next = this.head;
//         this.head = newNode;
//     }

//     print(){
//         let curr = this.head;
//         while(curr){
//             console.log(curr.data);
//             curr = curr.next
//         }
//     }
// }

// const list = new LinkedList()

// list.append(4);
// list.append(3);
// list.append(5);
// list.prepend(45);
// list.print()





// class Node{
//     constructor(data){
//         this.data = data;
//         this.next = null;
//     }
// }


// class linkedList{
//     constructor(){
//         this.head = null;
//     }
    
//     append(data){
//         let newNode = new Node(data);
//         if(!this.head){
//             this.head = newNode;
//             return;
//         }
//         let curr= this.head;
//         while(curr.next){
//             curr = curr.next;
//         }
//         curr.next = newNode;
//     }
    
//     exists(x){
//         let curr = this.head;
//         while(curr){
//             if(curr.data=== x) return true
//             curr = curr.next;
//         }
//             return false;
//     }

//     lastnode(){
//         let curr = this.head;
//         while(curr.next){
//             curr = curr.next;
//         }
//         console.log(curr.data)
//     }

//     prepend(data){
//         let newNode = new Node(data);
//         if(!this.head){
//             this.head = newNode
//             return;
//         }
//         newNode.next = this.head;
//         this.head = newNode;
//     }

//     deletefirstnode(){
//         if(!this.head){
//             console.log('list is empty');
//             return;
//         }
//         this.head = this.head.next;
//     }

//     firstnode(){
//         console.log(this.head.data)
//     }

//     deletematchingnode(x){
//         if(this.head.data===x){
//             this.head = this.head.next;
//         }
//         let curr = this.head;
//         while(curr.next){
//             if(curr.next.data===x){
//                 curr.next = curr.next.next;
//                 return;
//             }
//             curr = curr.next;
//         }
//     }

//     findMidlle(){
//         let slow = this.head;
//         let fast = this.head;
//         while(fast && fast.next){
//             slow = slow.next;
//             fast = fast.next.next;
//         }
//         return slow.data;
//     }

//     print(){
//         let curr = this.head;
//         while(curr){
//             console.log(curr.data);
//             curr = curr.next;
//         }
//     }

//     reverse(){
//         let prev = null;
//         let curr = this.head;
//         while(curr){
//             let next = curr.next;
//             curr.next = prev;
//             prev = curr;
//             curr = next;
//         }
//         this.head = prev;
//     }

// }

// let list = new linkedList();

// list.append(10)
// list.append(9)

// list.reverse()
// list.print()



// class Node{
//     constructor(data){
//         this.data = data;
//         this.next = null;
//         this.prev = null;
//     }
// }

// class doublyLinkedList{
//     constructor(){
//         this.head = null;
//         this.tail = null;
//     }

//     append(data){
//         let newNode = new Node(data);
//         if(!this.head){
//             this.head = this.tail = newNode;
//             return;
//         }
//         this.tail.next = newNode;
//         newNode.prev = this.tail;
//         this.tail = newNode;
//     }

//     prepend(data){
//         let newNode = new Node(data);
//         if(!this.head){
//             this.head = this.tail= newNode;
//             return;
//         }
//         newNode.next = this.head;
//         this.head.prev = newNode;
//         this.head = newNode;
//     }

//     printForward(){
//         let curr = this.head;
//         while(curr){
//             console.log(curr.data);
//             curr = curr.next;
//         }
//     }

//     middleNode(){
//         let slow = this.head;
//         let fast = this.head;
//         while(fast && fast.next){
//             slow = slow.next;
//             fast = fast.next.next;
//         }
//         return slow.data;
//     }
// }



// let list = new doublyLinkedList();
// list.append(2)
// list.append(9);
// list.prepend(0)
// console.log('middle:',list.middleNode())
// list.printForward()



// const arr = [1,2,4,3,5];
// function sum(arr){
//     if(arr.length===0) return 0;
//     return arr[0] + sum(arr.slice(1));
// }


// console.log(sum(arr))


// const st = 'helloworld';

// function rev(st){
//     if(st === '') return '';
//     return rev(st.slice(1)) + st[0];
// }

// console.log(rev(st));



// let s = 'madmam';
// function pali(s){
//     if(s.length<=1) return true;
//     if(s[0]!==s[s.length-1]) return false;
//     return pali(s.slice(1,s.length-1));
// }


// console.log(pali(s))

// function fibu(n){
//     if(n<=1) return n;
//     return fibu(n-1) + fibu(n-2);
// }

// console.log(fibu(6))


// function fib(n,i=1,a=0,b=1,result=[]){
//     if(i>n) return result;
//     result.push(a);
//     return fib(n,i+1,b,a+b,result)
// }

// console.log(fib(9))



// function prime(n){
//     if(n<=2) return false;
//     for(let i=2;i*i<n;i++){
//         if(n%i==0){
//             return false;
//         }
//         return true;
//     }
    
// }

// console.log(prime(8))


// function occ(arr,n){
//     let left = 0;
//     let res;
//     let right = arr.length-1;
//     while(left<=right){
//     let mid = Math.floor((left+right)/2);
//     if(arr[mid]===n){
//         res = mid;
//         left = mid+1
//     }else if(arr[mid]<n){
//         left = mid +1;
//     }else{
//         right = mid -1;
//     }
// }
// return res
// }
// let arr = [1,2,3,4,5,5,5,6,7]
// console.log(occ(arr,5))


// let arr = [1,2,3,4,5,5,5,6,7]

// function occn(arr,n,left=0,right=arr.length-1){
   
//     if(left>right) return -1;
//         let mid = Math.floor((left+right)/2);
// if (arr[mid] === n) return mid;
//   return arr[mid]>n?  occn(arr,n,left,mid-1) :  occn(arr,n,mid+1,right)
    
// }
// console.log(occn(arr,5))


//----------------------------------------------------------------------------------------------











// class Node{
//     constructor(data){
//         this.data = data;
//         this.next = null;
//     }
// }

// class lL{
//     constructor(){
//         this.head = null;
//     }

//     append(data){
//         let newNode = new Node(data);
//         if(!this.head){
//             this.head = newNode;
//             return;
//         }
//         let curr = this.head;
//         while(curr.next){
//             curr = curr.next;
//         }
//         curr.next = newNode;
//     }

//     prepend(data){
//         let newNode = new Node(data);
//         newNode.next = this.head;
//         this.head = newNode;
//     }

//     reverse(){
//         let prev = null;
//         let curr = this.head;
//         while(curr){
//             let next = curr.next;
//             curr.next = prev;
//             prev = curr;
//             curr = next;
//         }
//         this.head = prev;
//     }

//     ispal(){
//         let slow = this.head;
//         let fast = this.head;
//         while(fast && fast.next){
//             slow = slow.next;
//             fast = fast.next.next;
//         }
//         let prev = null;
//         let curr = slow;
//         while(curr){
//             let next = curr.next;
//             curr.next = prev;
//             prev = curr;
//             curr = next;
//         }
//         let left = this.head;
//         let right = prev;
//         while(right){
//             if(left.data!==right.data){
//                 return false;
//             }
//             left = left.next;
//             right = right.next;
//         }
//         return true;

//     }

//     isCycle(){
//         let slow = this.head;
//         let fast = this.head;
//         while(fast && fast.next){
//             slow = slow.next;
//             fast = fast.next;
//             if(slow === fast) return true;
//         }
//         return false;
//     }

//     cyclestart(){
//         let slow = this.head;
//         let fast = this.head;
//         while(fast && fast.next){
//             slow = slow.next;
//             fast = fast.next.next;
//             if(slow===fast){
//                 let hd = this.head;
//                 while(slow!==hd){
//                     slow = slow.next;
//                     hd = hd.next;
//                 }
//                 return hd.data;
//             }
//         }return null;
//     }


//     ispalindrome(){
//         let slow = this.head;
//         let fast = this.head;
//         while(fast && fast.next){
//             slow = slow.next;
//             fast = fast.next.next;
//         }
//         let prev = null;
//         let curr = slow;
//         while(curr){
//             let next = curr.next;
//             curr.next = prev;
//             prev = curr;
//             curr = next;
//         }
//         let left = this.head;
//         let right = prev;
//         while(right){
//             if(left.data!==right.data){
//                 return false;
//             }
//             left = left.next;
//             right = right.next;
//         }return true;
//     }

//     deletebeforen(n){
//         if(!this.head || this.head.data === n || this.head.next.data ===n) return;
//         let curr = this.head;
//         while(curr.next && curr.next.next){
//             if(curr.next.next.data===n){
//                 curr.next = curr.next.next;
//             }
//             curr = curr.next;
//         }
//     }


//     deleteodd(){
//         let curr = this.head;
//         while(this.head && this.head.data%2!==0){
//             this.head = this.head.next;
//         }
//         while(curr.next){
//             if(curr.next.data%2!==0){
//                 curr.next = curr.next.next;
//             }else{
//                 curr = curr.next;
//             }
            
//         }
//     }

//     deletemid(){
//         let slow = this.head;
//         let fast = this.head;
//         while(fast && fast.next){
//             slow = slow.next;
//             fast = fast.next.next;
//         }
//         let curr = this.head;
//         while(curr.next !== slow){
//             curr = curr.next
//         }
//         curr.next = curr.next.next;
//     }

//     print(){
//         let curr = this.head;
//         while(curr){
//             console.log(curr.data);
//             curr = curr.next;
//         }
//     }
// }




// class dNode{
//     constructor(data){
//         this.data = data;
//         this.next = null;
//         this.prev = null;
//     }
// }


// class dlL{
//     constructor(){
//         this.head = null;
//         this.tail = null;
//     }

//     append(data){
//         let newNode = new dNode(data);
//         if(!this.head){
//             this.head = this.tail = newNode;
//             return;
//         }
//         this.tail.next = newNode;
//         newNode.prev = this.tail;
//         this.tail = newNode;
//     }


//     printb(){
//         let curr = this.tail;
//         while(curr){
//             console.log(curr.data);
//             curr = curr.prev;
//         }
//     }


//     print(){
//         let curr = this.head;
//         while(curr){
//             console.log(curr.data);
//             curr = curr.next;
//         }

//     }

// }




// class Node{
//     constructor(data){
//         this.data = data;
//         this.next = null;
//     }
// }


// function arrtol(arr){
//     if(arr.length==0) return null;
//     this.head = new Node(arr[0]);
//     let current = this.head;
//     for(let i=1;i<arr.length;i++){
//         current.next = new Node(arr[i]);
//         current = current.next;
//     }
//     return head ;
// }

// let arr = [10, 20, 30, 40];
// let linkedList = arrtol(arr);
// console.log(linkedList);






// class doublyNode{
//     constructor(data){
//         this.data = data;
//         this.next = null;
//         this.prev = null;
//     }
// }


// class doublyLinkedList{
//     constructor(){
//         this.head = null;
//         this.tail= null;
//     }

//     append(data){
//         let newNode = new doublyNode(data);
//         if(!this.head){
//             this.head = this.tail = newNode;
//             return;
//         }
//         this.tail.next = newNode;
//         newNode.prev = this.tail;
//         this.tail = newNode;
//     }

//     prepend(data){
//         let newNode = new doublyNode(data);
//         if(!this.head){
//             this.head = this.tail = newNode;
//             return;
//         }
//         newNode.next = this.head;
//         this.head.prev = newNode;
//         this.head = newNode;
//     }

//     delete(n){
//         if(!this.head){
//             return;
//         }
//         if(this.head === n){
//             this.head = this.head.next;
//         }
//         let curr = this.head;
//         while(curr.next && curr.next.data!==n){
//             curr = curr.next;
//         }
//         curr.next = curr.next.next;
//         curr.next.prev = curr;
//     }

//     sort(){
//         let swap;
//         do{
//             swap = false;
//             let curr = this.head;
//            while(curr.next){
//             if(curr.data>curr.next.data){
//                 [curr.data,curr.next.data] = [curr.next.data,curr.data];
//                 swap = true;
//             }
//             curr = curr.next;
//            }
//         }while(swap)
//     }


   

//     del(n){
//         let fast = this.head;
//         let slow = this.head;
//         for(let i=0;i<n;i++){
//             fast = fast.next;
//         }

//         while(fast && fast.next){
//             fast = fast.next;
//             slow = slow.next;
//         }
//         slow.next = slow.next.next;
        
//     }

//     addbefore(n,data){
//         let newnode = new doublyNode(data);
//         if(!this.head){
//             this.head = this.tail = newnode;
//             return;
//         }
//         if(this.head.data == n){
//             newnode.next = this.head;
//             this.head.prev = newnode;
//             this.head = newnode;
//         }
//         let curr = this.head;
//         while(curr && curr.data!==n){
//             curr = curr.next;
//         }
//         if(!curr) return;
//         newnode.prev = curr.prev;
//         newnode.next = curr;

//         curr.prev.next = newnode;
//         curr.prev = newnode;
        
//     }

//     duplic(){
//         let set = new Set();
//         set.add(this.head.data)
//         let curr = this.head;
//         while(curr.next){
//             if(set.has(curr.next.data)){
//                 curr.next = curr.next.next;
//             }else{
//                 set.add(curr.next.data);
//                 curr = curr.next;
//             }
//         }
//     }

//     print(){
//         let curr = this.head;
//         while(curr){
//             console.log(curr.data);
//             curr = curr.next;
//         }
//     }
// }



// let l = new doublyLinkedList();
// l.append(1);
// l.append(2);
// l.append(3);
// l.append(4);
// l.append(3);
// l.append(2);
// l.addbefore(2,9);

// l.print()
