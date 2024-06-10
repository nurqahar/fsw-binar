let bubble=[2,5,3,4,1];

function bubbleSort(daftar){

    for (let i = 0; i < bubble.length; i++) {
        const bubbleSort = bubble[i];
        for(let j=0; j<bubble.length;j++){
            if(bubble[i]<bubble[j]){
                const bubble_=bubble[j];
                bubble[j]=bubble[i]
                bubble[i]=bubble_;
            }
        }
        console.log(bubble)

    }
}

bubbleSort(bubble);