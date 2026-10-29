// Read the amount paid and show payment errors.
const amountPaidInput = document.getElementById("amount-paid-input");
const amountPaidError = document.getElementById("amount-paid-error");

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

function updateAmountPaidInput() {
  amountPaidInput.disabled = getOrderItems().length === 0;
}
