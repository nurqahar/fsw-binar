const readLineSync=require('readline-sync');
const nilai=readLineSync.question('>Berapa nilai kamu? ');

    if(nilai>=90) {
        console.log(`Nilai lebih besar sama dengan ${nilai} A`);
    }else if(nilai>=80){
        console.log(`Nilai lebih besar sama dengan ${nilai} B`);
    }else if(nilai>=70){
        console.log(`Nilai lebih besar sama dengan ${nilai} C`);
    }else if(nilai>=60){
        console.log(`Nilai lebih besar sama dengan ${nilai} D`);
    }















// switch (nilai) {
//     case nilai>=90:
//         console.log(`Nilai lebih besar sama dengan ${nilai} A`);
//         break;
//     case nilai>=80:
//         console.log(`Nilai lebih besar sama dengan ${nilai} B`);
//         break;
//     case nilai>=70:
//         console.log(`Nilai lebih besar sama dengan ${nilai} C`);
//         break;
//     case nilai>=60:
//         console.log(`Nilai lebih besar sama dengan ${nilai} D`);
//         break;

//     default:
//         console.log("Nilai anda dibawah 60");
//         break;
// }