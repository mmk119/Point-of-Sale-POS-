// Select buttons, connect events, and start the app.
function refreshOrderPanel() {
  renderOrder();
}

function handleAddProduct(productId) {
  addProductToOrder(productId);
  refreshOrderPanel();
}

function handleIncrease(productId) {
  increaseQuantity(productId);
  refreshOrderPanel();
}

function handleDecrease(productId) {
  decreaseQuantity(productId);
  refreshOrderPanel();
}

function handleRemove(productId) {
  removeFromOrder(productId);
  refreshOrderPanel();
}

function startApp() {
  renderProducts(products);
  renderOrder();
}

startApp();
