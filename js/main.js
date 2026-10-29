// Handle what the cashier does, connect the events, and start the app.

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

// Returns the amount paid, or null after showing an error if it is missing or too low.
function readAmountPaid() {
  const finalTotal = calculateFinalTotal(getOrderItems());
  const amountPaid = getAmountPaidInputValue();

  if (amountPaid === null) {
    showAmountPaidError("Please enter the amount paid.");
    return null;
  }
  if (!isAmountPaidEnough(amountPaid, finalTotal)) {
    showAmountPaidError("Amount paid must be at least " + formatPrice(finalTotal));
    return null;
  }
  return amountPaid;
}

function handlePay() {
  if (getOrderItems().length === 0) {
    return;
  }

  const amountPaid = readAmountPaid();
  if (amountPaid === null) {
    return;
  }

  const receipt = createReceipt(amountPaid);
  saveSale(receipt);
  showReceipt(receipt);
  clearOrder();
  clearAmountPaidForm();
  refreshOrderPanel();
  renderSalesHistory();
}

function handleNewOrder() {
  hideReceipt();
}

function handleCustomProductSubmit(event) {
  event.preventDefault();
  const customProduct = readCustomProductForm();
  const errorMessage = getCustomProductError(customProduct.name, customProduct.price);
  if (errorMessage !== "") {
    showCustomProductMessage(errorMessage, true);
    return;
  }

  addCustomProduct(customProduct.name, customProduct.price, customProduct.category);
  resetCustomProductForm();
  showCustomProductMessage("Product added.", false);
  updateProductList();
}

// These elements are selected at the top of the UI files.
function connectProductEvents() {
  productSearchInput.addEventListener("input", function () {
    updateProductList();
  });
  categoryFilterSelect.addEventListener("change", function () {
    updateProductList();
  });
  customProductForm.addEventListener("submit", function (event) {
    handleCustomProductSubmit(event);
  });
}

function connectOrderEvents() {
  clearOrderButton.addEventListener("click", function () {
    handleClearOrder();
  });
  amountPaidInput.addEventListener("input", function () {
    updatePaymentLines();
  });
  exactAmountButton.addEventListener("click", function () {
    fillExactAmount();
  });
  payButton.addEventListener("click", function () {
    handlePay();
  });
  newOrderButton.addEventListener("click", function () {
    handleNewOrder();
  });
}

function connectEvents() {
  connectProductEvents();
  connectOrderEvents();
}

function startApp() {
  renderStoreName();
  updateProductList();
  refreshOrderPanel();
  renderSalesHistory();
  connectEvents();
}

startApp();
