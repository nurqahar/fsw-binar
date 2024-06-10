// nested for loop
const readLineSync=require('readline-sync');
const berapaLantai=readLineSync.question('>Mau ngepel berapa lantai(1-100)? ');
const ruangTiapLantai=readLineSync.question('>Berapa ruangan tiap lantai(1-100)? ');
for(let lantai=1;lantai<=berapaLantai;lantai++){
    console.log(`Lagi ngepel lantai ${lantai}`);
    for (let ruangan=1;ruangan<=ruangTiapLantai;ruangan++) {
        console.log(` Lagi ngepel ruang ${ruangan} di lantai ${lantai}`);
    }
}
