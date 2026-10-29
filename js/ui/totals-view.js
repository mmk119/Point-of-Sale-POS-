// Draw the subtotal, item count, discount, and final amount.
const itemCountText = document.getElementById("item-count");
const subtotalAmountText = document.getElementById("subtotal-amount");
const finalAmountText = document.getElementById("final-amount");

function renderTotals() {
  const currentOrderItems = getOrderItems();
  const itemCount = calculateItemCount(currentOrderItems);
  const subtotal = calculateSubtotal(currentOrderItems);
  const finalTotal = calculateFinalTotal(currentOrderItems);

  itemCountText.textContent = itemCount;
  subtotalAmountText.textContent = formatPrice(subtotal);
  finalAmountText.textContent = formatPrice(finalTotal);
}
