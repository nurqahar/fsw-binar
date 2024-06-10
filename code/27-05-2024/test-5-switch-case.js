const readLineSync=require('readline-sync');
const dagingDimasakApa=readLineSync.question('>Daging mau dimasak apa? ');

switch (dagingDimasakApa.toLowerCase()) {
    case "bakar":
        console.log(`daging ${dagingDimasakApa}`);
        break;
    case "goreng":
        console.log(`daging ${dagingDimasakApa}`);
        break;
    case "rebus":
        console.log(`daging ${dagingDimasakApa}`);
        break;
    case "panggang":
        console.log(`daging ${dagingDimasakApa}`);
        break;

    default:
        console.log(`masakan ${dagingDimasakApa} tidak tersedia`);
        break;
}