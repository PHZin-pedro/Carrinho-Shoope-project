// adicionar item
async function addItem(userCart, item) {
  userCart.push(item);
}

// calcular total
async function calculateTotal(userCart) {
  console.log("\n💰 Cart TOTAL:");

  const total = userCart.reduce((sum, item) => sum + item.subtotal(), 0);
  console.log(`Total: R$ ${total.toFixed(2)}`);

  return total;
}

// aplicar desconto (novo)
async function applyDiscount(userCart, percent) {
  const total = userCart.reduce((sum, item) => sum + item.subtotal(), 0);
  const discount = total * (percent / 100);
  const finalTotal = total - discount;

  console.log(`\n🏷️ Discount: ${percent}%`);
  console.log(`Final total: R$ ${finalTotal.toFixed(2)}`);
}

// deletar item
async function deleteItem(userCart, name) {
  const index = userCart.findIndex((item) => item.name === name);

  if (index !== -1) {
    userCart.splice(index, 1);
  }
}

// remover unidade
async function removeItem(userCart, item) {
  const indexFound = userCart.findIndex((p) => p.name === item.name);

  if (indexFound === -1) {
    console.log("❌ Item não encontrado");
    return;
  }

  if (userCart[indexFound].quantity > 1) {
    userCart[indexFound].quantity -= 1;
    return;
  }

  userCart.splice(indexFound, 1);
}

// mostrar carrinho
async function displayCart(userCart) {
  console.log("\n📦 Cart Items:");

  if (userCart.length === 0) {
    console.log("Seu carrinho está vazio 😢");
    return;
  }

  userCart.forEach((item, index) => {
    console.log(
      `${index + 1}. ${item.name} | R$ ${item.price.toFixed(2)} | ${
        item.quantity
      }x | Subtotal: R$ ${item.subtotal().toFixed(2)}`
    );
  });
}

export {
  addItem,
  calculateTotal,
  deleteItem,
  removeItem,
  displayCart,
  applyDiscount,
};