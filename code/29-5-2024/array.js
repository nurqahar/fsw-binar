const myArray=['Apple', 'Banana', 'Cherry'];
const outputDiv = document.getElementById("arrayOutput");

let content='<ul>';
// for(let i=0;i<myArray.length;i++){
//     content = content + `<li>${myArray[i]}</li>`;
//     console.log(content);   
// }

// for loop JS style
for(let item of myArray){
    content = content + `<li>${item}</li>`;
    console.log(content);   
}
console.log(content);
content+='</ul>';

outputDiv.innerHTML=content;