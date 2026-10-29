// Draw the subtotal, item count, discount, and final amount.
const itemCountText = document.getElementById("item-count");
const subtotalAmountText = document.getElementById("subtotal-amount");
const discountRow = document.getElementById("discount-row");
const discountLabelText = document.getElementById("discount-label");
const discountAmountText = document.getElementById("discount-amount");
const finalAmountText = document.getElementById("final-amount");
const mobileOrderSummary = document.getElementById("mobile-order-summary");

function renderDiscountRow(discount) {
  if (discount === 0) {
    discountRow.classList.add("hidden");
    return;
  }

  discountLabelText.textContent = formatDiscountLabel();
  discountAmountText.textContent = "-" + formatPrice(discount);
  discountRow.classList.remove("hidden");
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
  mobileOrderSummary.textContent = formatItemCount(itemCount) + " - " + formatPrice(finalTotal);
}
