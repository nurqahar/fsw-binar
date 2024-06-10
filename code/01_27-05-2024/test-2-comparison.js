const readLineSync=require('readline-sync');
const daging = readLineSync.question('Masak daging apa hari ini? ');
const dagingBeku=readLineSync.question('Apa daging beku? ');

// AND LOGIC
if(dagingBeku.toLowerCase() !== 'beku' && daging === 'sapi'){
    console.log('> daging bisa dimasak');
}else if(dagingBeku.toLowerCase() !== 'beku' && daging === 'ikan'){
    console.log('> daging perlu dibersihkan dulu');
}else{
    console.log('> daging tidak bisa dimasak');
}

