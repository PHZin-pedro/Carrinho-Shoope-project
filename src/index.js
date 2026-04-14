import * as cartService from "./services/cart.js";
import createItem from "./services/item.js";

const myCart = [];
const myWishlist = [];

console.log("🛒 Welcome to your Shopping Cart!\n");

// criando itens mais variados
const item1 = await createItem("Notebook Gamer RTX 4060", 7500.00, 1);
const item2 = await createItem("Headset HyperX Cloud", 350.00, 2);
const item3 = await createItem("Mouse Logitech G502", 280.00, 1);

// adicionando ao carrinho
await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);
await cartService.addItem(myCart, item3);

// removendo unidades
await cartService.removeItem(myCart, item2);
await cartService.removeItem(myCart, item2); // remove totalmente

// adicionando wishlist (novo)
myWishlist.push(item2);

console.log("\n Wishlist:");
console.log(myWishlist);

// mostrar carrinho
await cartService.displayCart(myCart);

// total com desconto
await cartService.calculateTotal(myCart);
await cartService.applyDiscount(myCart, 10); // 10% desconto