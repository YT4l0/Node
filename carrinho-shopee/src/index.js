import createItem from "./services/item.js";
import * as cartService from "./services/cart.js";

const mycart = [];
const mywhishLits = [];

console.log("Bem vindo ao seu carrinho da shoppee");

const item1 = await createItem("mouse gamer", 20.99, 1); //js tenta fazer tudo ao mesmo tempo por isso usar await e async
const item2 = await createItem("teclado", 20.1, 4);

await cartService.addItem(mycart, item1);
await cartService.addItem(mycart, item2);

await cartService.removeItem(mycart, item2)

await cartService.displayCart(mycart);




// await cartService.deleteItem(mycart, item1.name)


