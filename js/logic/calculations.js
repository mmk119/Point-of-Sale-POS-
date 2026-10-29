// Line total, subtotal, item count, discount, final total, and change.
function calculateLineTotal(orderItem) {
  return orderItem.price * orderItem.quantity;
}
