// let arr = [21,3,4,2,5,3,34];

// function bubbleSort(arr){
//     let n = arr.length;
//     for(let i=0;i<n-1;i++){
//         let swapped = false;
//         for(let j=0;j<n-i-1;j++){
//             if(arr[j]>arr[j+1]){
//                 [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
//                 swapped = true;
//             }
//         }
//         if(!swapped) break;
//     }
//     return arr;
// }

// console.log(bubbleSort(arr))







// function insertionSort(arr){
//     let n = arr.length;
//     for(let i=1;i<n;i++){
//         let key = arr[i];
//         let j= i-1;
//         while(j>=0 && arr[j]>key){
//             arr[j+1] = arr[j];
//             j--;
//         }
//         arr[j+1] = key;
//     } 
//     return arr;
// }

// let arr = [4,3,6,2,7,1,3];
// console.log(insertionSort(arr))




// function selectionSort(arr){
//     let n= arr.length;
//     for(let i=0;i<n;i++){
//         let min = i;
//         for(let j=i+1;j<n;j++){
//             if(arr[j]<arr[min]){
//                 min = j;
//             }
//         }
//         if(min !== i){
//             [arr[i],arr[min]] = [arr[min],arr[i]];
//         }
//     }return arr;
// }

// let arr = [4,2,3,45,6,5354,34,0];
// console.log(selectionSort(arr))



// function quicksort(arr){
//     if(arr.length<=1) return arr;

//     let pivot = arr[arr.length-1];
//     let left = [];
//     let right = [];
//     for(let i=0;i<arr.length-1;i++){
//         if(arr[i]<pivot) left.push(arr[i]);
//         else right.push(arr[i]);
//     }
//     return [...quicksort(left),pivot,...quicksort(right)];
// }



// function quickSort(arr,low = 0,high = arr.length-1){
//     if(low<high){
//         let p = partition(arr,low,high);
//         quickSort(arr,low,p-1);
//         quickSort(arr,p+1,high);
//     }
//     return arr;
// }


// function partition(arr,low,high){
//     let pivot = high;
//     let i = low-1;
//     for(let j=low;j<high;j++){
//         if(arr[j]<pivot){
//             i++;
//             [arr[i],arr[j]] = [arr[j],arr[i]];
//         }
//     }
//     [arr[i+1],arr[high]] = [arr[high],arr[i+1]];
//     return i+1;
// }


// let arr = [3,1,434,2,3,5,1,3,4,0]
// console.log(quickSort(arr));



// function mergeSort(arr){
//     if(arr.length<=1) return arr;
//     let mid = Math.floor(arr.length/2);
//     let left = mergeSort(arr.slice(0,mid));
//     let right = mergeSort(arr.slice(mid));
//     return merge(left,right);
// }

// function merge(left,right){
//     let res = [];
//     let i=0,j=0;
//     while(i<left.length && j<right.length){
//         if(left[i]<right[j]){
//             res.push(left[i]);
//             i++;
//         }else{
//             res.push(right[j]);
//             j++;
//         }
//     }
//     while(i<left.length){
//         res.push(left[i]);
//         i++;
//     }
//     while(j<right.length){
//         res.push(right[j]);
//         j++;
//     }
//     return res;
// }

// let arr = [3,2,5,4,1,2,6,7,0];
// console.log(mergeSort(arr))





