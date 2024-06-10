// merge sorting
/**
 * 
 * Math.floor
 * Math floor A numeric expression.
 * Returns the greatest integer less than or 
 * equal to its numeric argument.
 * 
 * Array.slice
 * (start, end) number type
 * The index to the beginning of the specified portion of stringObj.
 * Returns a section of a string.
 * 
 * 
 */

arrays = [5,3,1,4,2];
function mergeSort(arr){
    let len = arr.length;
    arr
    if(len<2) return arr; //jika isi array dibawah 2 alias hanya 1 isinya maka langsung di return array-nya & tidak melanjutkan sorting.
    let mid = Math.floor(len/2);//membagi 2 panjang array, kemudian membulatkan ke bawah/atas.
    let left=arr.slice(0,mid);//mengambil nilai paling kiri, dari index (0) sampai index (mid-1).
    let right=arr.slice(mid);//mengambil nilai index (mid) sampai index (akhir).
    left
    right
    mid
    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right){
    let result=[];
    let lLen=left.length;//return panjang array left
    let rLen=right.length;
    let l=0;
    let r=0;
    while(l<lLen && r<rLen){
        if(left[l] < right[r]){
            result.push(left[l++]);//menambahkan nilai ke array "result" pada akhir index
        }else{
            result.push(right[r++]);
        }
        result
    }
    left
    right
    l
    r
    return result.concat(left.slice(l)).concat(right.slice(r));
}
let print=[];
print = mergeSort(arrays);
console.log(print);