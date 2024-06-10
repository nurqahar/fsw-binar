function racikBumbu(bumbu){
    const bumbuSiapDimasak=['kari', 'asam manis', 'pedas'];
    return bumbuSiapDimasak.includes(bumbu.toLowerCase());
}
function periksaMeat(meat){
    const meatSiapDimasak=['sapi', 'ayam', 'ikan'];
    return meatSiapDimasak.includes(meat.toLowerCase());
}
function periksaPedas(pedas){
    return `cek level pedas: ${pedas}`;
}

function masakSoup(meat, bumbu, pedas){
    if(periksaMeat(meat)){
        if(racikBumbu(bumbu)){
            console.log(periksaPedas(pedas));
            return `sup ${meat} with ${bumbu} ${pedas}`;
        }
    }
}

console.log(masakSoup('sapi', 'asam manis', 'pedas'));
