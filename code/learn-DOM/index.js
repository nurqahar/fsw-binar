const body = document.body;
document.title="Document Object Model";

const h1_1=document.createElement('h1');
h1_1.textContent="<marquee>Document Object Model<marquee>";
const h1_2=document.createElement('h1');
h1_2.innerHTML="<marquee>Document Object Model<marquee>";
const h1_3=document.createElement('h1');
h1_3.innerText="<marquee>Document Object Model<marquee>";

const btn_1 = document.getElementById('btn_1');
const btn_2 = document.querySelector('#btn_2');
btn_1.style.border='none';
btn_2.style.background='green';
btn_2.style.color='white';

body.append(h1_1);
body.append(h1_2);
body.append(h1_3);

function gantiWarna() {
    btn_1.style.background='red';
    btn_1.style.color='white';
}

function ubahText(){
    console.log('change text btn 1');
    btn_1.textContent='TEXT CHANGED';
}

function mouseOut() {
    btn_1.textContent = 'CLICK 1';
    btn_1.style.background='';

}
