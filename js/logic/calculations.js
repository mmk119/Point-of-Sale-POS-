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

function calculateFinalTotal(orderItems) {
  // The discount will be applied here in the discount bonus phase.
  return calculateSubtotal(orderItems);
}
