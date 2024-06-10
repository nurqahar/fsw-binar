const readLineSync=require('readline-sync');
const berapaLantai=readLineSync.question('>Mau ngepel berapa lantai(1-100)? ');

for(let i=1; i<=berapaLantai;i++){
    console.log(`Lagi ngepel lantai ${i}`);
}

