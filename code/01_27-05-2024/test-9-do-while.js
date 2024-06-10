// DO LOOP
const readLineSync=require('readline-sync');
const berapaLantai=readLineSync.question('>Mau ngepel berapa lantai(1-100)? ');

let i=1;
do{
    console.log(`Lagi ngepel lantai ${i}`);
    i++;
}while(i<=berapaLantai);