/**
 * Burger: 3 seconds waiting time
 * Fried Chicken: 5 seconds waiting time
 * Pizza: 10 seconds waiting time
 * catatan: tambahkan alert
 */
async function getOrder(menu){
    return new Promise((success, failed)=>{
        if (menu.toLowerCase()=="burger"){
            setTimeout(()=>{
                success(`${menu} ready!`);
            }, 3000);
        }else if (menu.toLowerCase()=="fried chicken"){
            setTimeout(()=>{
                success(`${menu} ready!`);
            }, 5000);
        }else if (menu.toLowerCase()=="pizza"){
            setTimeout(()=>{
                success(`${menu} ready!`);
            }, 10000);
        }else{
            failed(`${menu} not available`);
        }
    });
}

document.getElementById('place_order').addEventListener('click', async ()=>{
    try {
        document.getElementById('order_result').innerHTML="Processing your order...";    
        let order = prompt("Type your order here:");
        console.log("Your order: ", order);
        
        let order_result = await getOrder(order);
        document.getElementById('order_result').innerHTML=order_result;
        alert(order_result.toUpperCase());  
        console.log(order_result);
    } catch (error) {
        console.log(error);
        alert(error);
        document.getElementById('order_result').innerHTML=error;
    }
});