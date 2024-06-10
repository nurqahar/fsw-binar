const readLineSync=require('readline-sync');
const dagingDimasakApa=readLineSync.question('>Daging mau dimasak apa? ');

if(dagingDimasakApa.toLowerCase()=='bakar'){
    console.log(`daging ${dagingDimasakApa}`);
}
if(dagingDimasakApa.toLowerCase()=='rebus'){
    console.log(`daging ${dagingDimasakApa}`);
}
if(dagingDimasakApa.toLowerCase()=='goreng'){
    console.log(`daging ${dagingDimasakApa}`);
}
if(dagingDimasakApa.toLowerCase()=='panggang'){
    console.log(`daging ${dagingDimasakApa}`);
}

// OTHER METHOD
console.log('>CONTOH 2:');
if(dagingDimasakApa.toLowerCase()=='bakar'){
    console.log(`daging ${dagingDimasakApa}`);
}else if(dagingDimasakApa.toLowerCase()=='rebus'){
    console.log(`daging ${dagingDimasakApa}`);
}else if(dagingDimasakApa.toLowerCase()=='goreng'){
    console.log(`daging ${dagingDimasakApa}`);
}else if(dagingDimasakApa.toLowerCase()=='panggang'){
    console.log(`daging ${dagingDimasakApa}`);
}

console.log('>CONTOH 3:');
if(dagingDimasakApa.toLowerCase()=='bakar'){
    console.log(`daging ${dagingDimasakApa}`);
}else if(dagingDimasakApa.toLowerCase()=='rebus'){
    console.log(`daging ${dagingDimasakApa}`);
}else if(dagingDimasakApa.toLowerCase()=='goreng'){
    console.log(`daging ${dagingDimasakApa}`);
}else{
    console.log("daging panggang");
}