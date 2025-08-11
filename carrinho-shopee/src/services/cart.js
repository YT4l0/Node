async function addItem(userCart, item) {
    userCart.push(item);
    
}

async function deleteItem(userCart, name) {
    const index = userCart.findIndex((item)=> item.name === name);

    if(index !== -1){
        userCart.splice(index,1) 
    }

}

async function removeItem(userCart, item) {

    const indexFound = userCart.findIndex((p) => p.name === item.name);
    console.log("", indexFound);

    if(indexFound == -1){
        console.log("item n encontrado",);
        return
       
    }
    if(userCart[indexFound].quantity > 1) {
         userCart[indexFound].quantity -= 1 ;
         return
        
    } 
    if(userCart[indexFound].quantity == 1){

         userCart.splice(indexFound,1)
         return

        
    }
    
}

async function calculeteTotal(userCart) {

    console.log("TOTAL");

 const result = (userCart.reduce((total, item)=> total + item.subtotal(), 0));
 console.log(`\n total ${result}`); 
    

    
}

async function displayCart(userCart) {
    console.log("shopee display");
    userCart.forEach((item, index)=>{
        console.log("---------------------------------------------------------------------------\n")

        console.log(`${index + 1}. \t ${item.name} \t - \t valor ${item.price} \t | ${item.quantity} | \t subtotal: ${item.subtotal().toFixed(2)}\n`);

    });
    
}

export {
    addItem,
    calculeteTotal,
    deleteItem,
    displayCart,
    removeItem
}