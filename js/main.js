// Select buttons, connect events, and start the app.
function refreshOrderPanel() {
  renderOrder();
  renderTotals();
  updateOrderButtons();
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

function handleClearOrder() {
  clearOrder();
  refreshOrderPanel();
}

function handlePay() {
  if (getOrderItems().length === 0) {
    return;
  }

  const receipt = createReceipt();
  showReceipt(receipt);
  clearOrder();
  refreshOrderPanel();
}

function handleNewOrder() {
  hideReceipt();
}

// clearOrderButton and payButton are selected in order-view.js.
function connectOrderButtons() {
  clearOrderButton.addEventListener("click", function () {
    handleClearOrder();
  });
  payButton.addEventListener("click", function () {
    handlePay();
  });
}

function startApp() {
  renderProducts(products);
  refreshOrderPanel();
  connectOrderButtons();
}

startApp();
