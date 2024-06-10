let readLineSync=require('readline-sync');
let user_name=readLineSync.question("may i have your name? ");
console.log('> Hi '+ user_name);

let umur = readLineSync.question("How old are you? ");
if(umur>18){
    console.log("> Anda sudah cukup umur");
}else{
    console.log("> Anda belum cukup umur");
}
