const readLineSync=require('readline-sync');
const suhu=readLineSync.question('Berapa suhu oven? (celcius) ');

// if, else if, else
// if(suhu<100){
//     console.log(" >tidak terlalu panas");
// }else if(suhu==100){
//     console.log(" >suhu mendidih");
// }else{
//     console.log(" >panas banget");
// }

// Ternary operator
suhu<100 ? console.log(" >tidak terlalu panas"): suhu==100 ? console.log(" >suhu mendidih"):console.log(" >panas banget")