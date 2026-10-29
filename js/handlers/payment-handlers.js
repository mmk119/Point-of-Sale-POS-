// Handle paying for the order and starting a new one.

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
