// EXERCISE-2
const readLineSync=require('readline-sync');
const bilGanjil=readLineSync.question('>Masukkan berapa jumlah bilangan ganjil yang akan ditampilkan: ');

console.log("EXERCISE 2");

let j=1;
for(let i=1;i<=bilGanjil;i++){
    console.log(j);
    j+=2;
}