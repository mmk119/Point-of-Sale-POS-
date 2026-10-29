// Connect events and start the app.

// These elements are selected at the top of the UI files.
function connectEvents() {
  clearOrderButton.addEventListener("click", function () {
    handleClearOrder();
  });
  payButton.addEventListener("click", function () {
    handlePay();
  });
  productSearchInput.addEventListener("input", function () {
    updateProductList();
  });
  categoryFilterSelect.addEventListener("change", function () {
    updateProductList();
  });
  newOrderButton.addEventListener("click", function () {
    handleNewOrder();
  });
  customProductForm.addEventListener("submit", function (event) {
    handleCustomProductSubmit(event);
  });
}

function startApp() {
  renderStoreName();
  updateProductList();
  refreshOrderPanel();
  renderSalesHistory();
  connectEvents();
}

startApp();
