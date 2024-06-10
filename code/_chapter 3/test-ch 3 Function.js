
//function definition
function masakSoup(meat){
    return `masak sup ${meat}`;
};
console.log(masakSoup("sapi"));


function newMasakSoup(meat){
    const listMeat=['ikan', 'ayam', 'sapi'];
    if (listMeat.includes(meat.toLowerCase())){
        return `masak sup ${meat.toLowerCase()}`;
    }else{
        return `maaf, ${meat} meat tidak tersedia`;
    };
};
console.log(newMasakSoup("IKAN"));

//function expression
const new_exp_masakSoup = function (meat){
    const listMeat=['ikan', 'ayam', 'sapi'];
    if (listMeat.includes(meat.toLowerCase())){
        return `masak sup ${meat.toLowerCase()}`;
    }else{
        return `maaf, ${meat} meat tidak tersedia`;
    };  
};
console.log(new_exp_masakSoup("ayam"));

//function arrow
const new_arrow_makeSoup = function (meat){
    const listMeat=['ikan', 'ayam', 'sapi'];
    if (listMeat.includes(meat.toLowerCase())){
        return `masak sup ${meat.toLowerCase()}`;
    }else{
        return `maaf, ${meat} meat tidak tersedia`;
    };  
};
console.log(new_arrow_makeSoup("unta"));

const simple_makeSoup = (meat, bumbu, levelPedas)=> `Sup ${meat} with ${bumbu}, level pedas ${levelPedas}`;
console.log(simple_makeSoup('ayam', 'kecap', 10));

//function currying
function super_makeSoup(meat){
    const listMeat=['ikan', 'ayam', 'sapi'];
    if (listMeat.includes(meat.toLowerCase())){
        return function(bumbu){
            return function(pedas){
                return `masak sup ${meat.toLowerCase()} with bumbu ${bumbu}, level pedas ${pedas}`;
            }
        }
    }
};
console.log(super_makeSoup("sapi")("kari")(4));

//function definition
//function with object
let jane=createPerson("jane", 23);
console.log(jane.nama);


function createPerson(nama, umur){
    let person={
        nama: nama,
        umur: umur
    };
    return person
};

let john = createPerson("john", "20");
console.log(john);



// arrow function
new_create_person = (nama, umur) => {
    let person={
        nama: nama, umur: umur
    };
    return person;
};

let watson = new_create_person("watson", 30);
console.log(new_create_person("watson", 30));
console.log(watson.nama);

hello = val => "hello" + val;
console.log(hello(" world"));


//currying
function currying_person(nama){
    return function(umur){
        let person = {
            nama: nama,
            umur: umur
        }
        return person;
    };
};

function luas_persegi_panjang(p){
    return function(l){
        return p*l;
    };
};

let sherlock = currying_person("sherlock")(30);
console.log(sherlock.nama);
console.log(sherlock.umur);

console.log(luas_persegi_panjang(20)(20));

