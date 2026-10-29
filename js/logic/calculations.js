// Line total, subtotal, item count, discount, final total, and change.
function calculateLineTotal(orderItem) {
  return orderItem.price * orderItem.quantity;
}

function calculateSubtotal(orderItems) {
  let subtotal = 0;
  for (let index = 0; index < orderItems.length; index++) {
    subtotal = subtotal + calculateLineTotal(orderItems[index]);
  }
  return subtotal;
}

function calculateItemCount(orderItems) {
  let itemCount = 0;
  for (let index = 0; index < orderItems.length; index++) {
    itemCount = itemCount + orderItems[index].quantity;
  }
  return itemCount;
}

function calculateDiscount(subtotal) {
  if (roundToCents(subtotal) > DISCOUNT_THRESHOLD) {
    return roundToCents(subtotal * DISCOUNT_RATE);
  }
  return 0;
}

function calculateFinalTotal(orderItems) {
  const subtotal = calculateSubtotal(orderItems);
  const discount = calculateDiscount(subtotal);
  return roundToCents(subtotal - discount);
}

function calculateChange(amountPaid, finalTotal) {
  return roundToCents(amountPaid - finalTotal);
}

function isAmountPaidEnough(amountPaid, finalTotal) {
  return roundToCents(amountPaid) >= roundToCents(finalTotal);
}
