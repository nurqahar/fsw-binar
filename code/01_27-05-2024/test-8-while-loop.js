// WHILE LOOP
const readLineSync=require('readline-sync');
const berapaLantai=readLineSync.question('>Mau ngepel berapa lantai(1-100)? ');

let i=1;
while(i<=berapaLantai){
    console.log(`Lagi ngepel lantai ${i}`);
    i++;
}