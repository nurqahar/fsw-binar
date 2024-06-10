// EXERCISE-1
const readLineSync=require('readline-sync');
const jumlahBintang=readLineSync.question('>Masukkan berapa jumlah bintang: ');

console.log("EXERCISE 1");

for(let i=1;i<=jumlahBintang;i++){
    for (let j=1; j<=i;j++) {
        process.stdout.write("*");
    }
    console.log("");
}