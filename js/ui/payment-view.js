// Read the amount paid, show the live amount paid and change, and show payment errors.
const amountPaidInput = document.getElementById("amount-paid-input");
const amountPaidError = document.getElementById("amount-paid-error");
const exactAmountButton = document.getElementById("exact-amount-button");
const amountPaidDisplay = document.getElementById("amount-paid-display");
const changeDisplay = document.getElementById("change-display");

// Returns the typed amount as a number, or null if the box is empty or not a number.
function getAmountPaidInputValue() {
  const amountText = amountPaidInput.value.trim();
  if (amountText === "") {
    return null;
  }

  const amountPaid = Number(amountText);
  if (isNaN(amountPaid)) {
    return null;
  }
  return amountPaid;
}

function showAmountPaidError(message) {
  amountPaidError.textContent = message;
}

function clearAmountPaidError() {
  amountPaidError.textContent = "";
}

function clearAmountPaidForm() {
  amountPaidInput.value = "";
  clearAmountPaidError();
}

// Shows the typed amount and the change live. Change stays $0.00 until the amount covers the total.
function updatePaymentLines() {
  const finalTotal = calculateFinalTotal(getOrderItems());
  const amountPaid = getAmountPaidInputValue();
  let shownAmountPaid = 0;
  let change = 0;

  if (amountPaid !== null) {
    shownAmountPaid = amountPaid;
  }
  if (amountPaid !== null && isAmountPaidEnough(amountPaid, finalTotal)) {
    change = calculateChange(amountPaid, finalTotal);
  }
  amountPaidDisplay.textContent = formatPrice(shownAmountPaid);
  changeDisplay.textContent = formatPrice(change);
}

function fillExactAmount() {
  const finalTotal = calculateFinalTotal(getOrderItems());
  amountPaidInput.value = finalTotal.toFixed(2);
  clearAmountPaidError();
  updatePaymentLines();
}

function updateAmountPaidInput() {
  const isOrderEmpty = getOrderItems().length === 0;
  amountPaidInput.disabled = isOrderEmpty;
  exactAmountButton.disabled = isOrderEmpty;
}
