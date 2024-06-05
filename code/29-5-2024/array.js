const ul_open="<ul>";
const ul_close="</ul>";

const outputDiv = document.getElementById("arrayOutput");

const fruits=['Apple', 'Banana', 'Cherry'];
const vegetables=['spinach', 'leaf', 'tauge'];
const fruitsAndVegetables=fruits.concat(vegetables);

fruitsAndVegetables.push('Mango');
fruitsAndVegetables.unshift('Mint');

let content='<ul>';
for(let i=0;i<fruitsAndVegetables.length;i++){
    content = content + `<li>${fruitsAndVegetables[i].toUpperCase()}</li>`;
    console.log(content);   
}
content+='</ul>';
fruits.pop();
console.log(fruitsAndVegetables);

// for loop JS style
// for(let item of fruits){
//     content = content + `<li>${item}</li>`;
//     console.log(content);   
// }


//USING FOR EACH
const h1_2=document.getElementById("foreach");
h1_2.innerHTML="Display array using FOR EACH";
const outputDiv2 = document.getElementById("arrayOutput2");

const fruitsAndVegetablesNoApple=fruitsAndVegetables.filter((item)=> item.toLowerCase() !== 'apple');
let content2="<ul>";
fruitsAndVegetablesNoApple.forEach((item)=>{
    content2+= `<li>${item}</li>`;
});
content2+="</ul>";
outputDiv.innerHTML=content;
outputDiv2.innerHTML=content2;

// USING MAP
const outputDiv3=document.getElementById('arrayOutput3');
const h1_3=document.getElementById("h1_3");
h1_3.innerHTML="USING MAP";
const fruitsAndVegetablesWithPlastic=fruitsAndVegetables.map((item)=>{
    return `bungkus - ${item}`;
});

let content3=ul_open;
fruitsAndVegetablesWithPlastic.forEach((item)=>{
    content3+=`<li>${item}</li>`;
});
content3+=ul_close;
outputDiv3.innerHTML=content3;
