function heapSort(arr){
    let n = arr.length;

    for(let i=Math.floor((n/2)-1);i>=0;i--){
        heapify(arr,n,i);
    }

    for(let i=n-1;i>0;i--){
        [arr[0],arr[i]] = [arr[i],arr[0]];
        heapify(arr,i,0);
    }return arr;
}

function heapify(arr,size,i){
    let largest = i;
    let left = 2*i+1;
    let parent = 2*i/2-1
    let right = 2*i+2;

    if(left<size && arr[left]>arr[largest]){
        largest = left;
    }if(right<size && arr[right]>arr[largest]){
        largest = right;
    }if(largest!==i){
        [arr[largest],arr[i]] = [arr[i],arr[largest]];
        heapify(arr,size,largest);
    }
}

let arr = [4, 3, 7, 90];

console.log(heapSort(arr))