// quick sorting
arrays = [5,3,1,4,2];

function quickSort(arr, left, right){
    let len=arr.length;
    let pivot;
    let partition_index;
    if(left<right){
        pivot=right;
        partition_index=partition(arr, pivot, left, right);

        quickSort(arr, left, partition-1);
        quickSort(arr, partition_index+1, right);
    }
    return arr;
}

function partition(arr, pivot, left, right){
    let pivotVal=arr[pivot]
    let partition_index=left;

    for(let i=left; i<right; i++){
        if(arr[i]<pivotVal){
            swap(arr, i, partition_index);
            partition_index++;
        }
    }
    swap(arr, right, partition_index);
    return partition_index
}

function swap(arr, i, j){
    let temp = arr[i];
    arr[i]=arr[j];
    arr[j]=temp;
}