// Draw the item count, subtotal, discount, final amount, and the amount on the Pay button.
const itemCountText = document.getElementById("item-count");
const subtotalAmountText = document.getElementById("subtotal-amount");
const discountRow = document.getElementById("discount-row");
const discountLabelText = document.getElementById("discount-label");
const discountAmountText = document.getElementById("discount-amount");
const finalAmountText = document.getElementById("final-amount");
const paymentTotalText = document.getElementById("payment-total-amount");

function renderDiscountRow(discount) {
  if (discount === 0) {
    discountRow.classList.add("hidden");
    return;
  }

  discountLabelText.textContent = formatDiscountLabel();
  discountAmountText.textContent = "-" + formatPrice(discount);
  discountRow.classList.remove("hidden");
}

function renderPayButtonLabel(itemCount, finalTotal) {
  if (itemCount === 0) {
    payButton.textContent = "Pay";
  } else {
    payButton.textContent = "Pay " + formatPrice(finalTotal);
  }
}

function renderTotals() {
  const currentOrderItems = getOrderItems();
  const itemCount = calculateItemCount(currentOrderItems);
  const subtotal = calculateSubtotal(currentOrderItems);
  const finalTotal = calculateFinalTotal(currentOrderItems);

  itemCountText.textContent = itemCount;
  subtotalAmountText.textContent = formatPrice(subtotal);
  renderDiscountRow(calculateDiscount(subtotal));
  finalAmountText.textContent = formatPrice(finalTotal);
  paymentTotalText.textContent = formatPrice(finalTotal);
  renderPayButtonLabel(itemCount, finalTotal);
  updatePaymentLines();
}
