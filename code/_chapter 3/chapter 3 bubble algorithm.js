// bubble sorting
arrays = [5,3,1,4,2];

function bubbleSort(arr){
    let len = arr.length;
    let isSorted=true;
    do{

        for (let i=0;i<len;i++){
            let temp = arr[i];
            arr[i] = arr[i+1];
            arr[i+1]=temp;
            isSorted=false;
        }
    }while(!isSorted);
    console.log(arr);
}

bubbleSort(arrays);
