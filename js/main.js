// Select buttons, connect events, and start the app.
function handleAddProduct(productId) {
  addProductToOrder(productId);
  renderOrder();
}

function startApp() {
  renderProducts(products);
  renderOrder();
}

startApp();
