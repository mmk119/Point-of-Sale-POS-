// Build the receipt object for a completed sale.

// Copy each item so the receipt stays correct after the order is cleared.
function copyOrderItems() {
  const currentOrderItems = getOrderItems();
  const copiedItems = [];
  for (let index = 0; index < currentOrderItems.length; index++) {
    copiedItems.push({
      productId: currentOrderItems[index].productId,
      name: currentOrderItems[index].name,
      price: currentOrderItems[index].price,
      quantity: currentOrderItems[index].quantity
    });
  }
  return copiedItems;
}

function createReceipt(amountPaid) {
  const receiptItems = copyOrderItems();
  const subtotal = calculateSubtotal(receiptItems);
  const finalTotal = calculateFinalTotal(receiptItems);

  return {
    items: receiptItems,
    itemCount: calculateItemCount(receiptItems),
    subtotal: subtotal,
    discount: calculateDiscount(subtotal),
    finalTotal: finalTotal,
    amountPaid: amountPaid,
    change: calculateChange(amountPaid, finalTotal),
    createdAt: new Date(),
    saleNumber: getNextSaleNumber()
  };
}
