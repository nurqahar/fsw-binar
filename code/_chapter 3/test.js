let pesan="hello";
console.log(pesan);

let nama="sabrina", umur=3000;


const phi=3.14;
const speed_of_light=299_792_458;
const speed_of_light_str="299_792_458";
console.log(phi);
console.log(speed_of_light+" m/s");

pesan = pesan.replace("hello", "hai");
let message=`${pesan},  namaku ${nama} umurku ${umur} tahun. Kecepatan lariku ${speed_of_light} m/s`;
console.log(message)
// console.log(`${pesan}, namaku ${nama} umurku ${umur} tahun. Kecepatan lariku ${speed_of_light} m/s`);
console.log(message.trim());
console.log(message.length);
console.log(message.slice(0,20));
console.log(speed_of_light_str.split("_"));
