// Handle adding, changing, removing, and clearing items in the current order.

// Clearing the error here stops an old "at least $X" message staying after the total changes.
function refreshOrderPanel() {
  renderOrder();
  renderTotals();
  updateOrderButtons();
  updateAmountPaidInput();
  clearAmountPaidError();
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
  const shouldClear = confirm("Clear the whole order?");
  if (!shouldClear) {
    return;
  }

  clearOrder();
  clearAmountPaidForm();
  refreshOrderPanel();
}
