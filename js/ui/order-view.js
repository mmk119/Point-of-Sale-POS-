// Draw the order rows and the empty order message.
const orderList = document.getElementById("order-list");
const emptyOrderMessage = document.getElementById("empty-order-message");

function createOrderRow(orderItem) {
  const row = document.createElement("li");
  row.classList.add("order-row");

  const rowInfo = document.createElement("div");
  rowInfo.classList.add("order-row-info");

  const nameText = document.createElement("p");
  nameText.classList.add("order-row-name");
  nameText.textContent = orderItem.name;

  const unitPriceText = document.createElement("p");
  unitPriceText.classList.add("order-row-unit-price");
  unitPriceText.textContent = formatPrice(orderItem.price) + " each";

  rowInfo.append(nameText, unitPriceText);

  // The + and - buttons will go around the quantity here in Phase 3.
  const rowControls = document.createElement("div");
  rowControls.classList.add("order-row-controls");

  const quantityText = document.createElement("span");
  quantityText.classList.add("order-row-quantity");
  quantityText.textContent = "x" + orderItem.quantity;
  rowControls.append(quantityText);

  const lineTotalText = document.createElement("span");
  lineTotalText.classList.add("order-row-line-total");
  lineTotalText.textContent = formatPrice(calculateLineTotal(orderItem));

  row.append(rowInfo, rowControls, lineTotalText);
  return row;
}

function renderOrder() {
  const currentOrderItems = getOrderItems();
  orderList.innerHTML = "";

  if (currentOrderItems.length === 0) {
    emptyOrderMessage.classList.remove("hidden");
    return;
  }

  emptyOrderMessage.classList.add("hidden");
  for (let index = 0; index < currentOrderItems.length; index++) {
    const orderRow = createOrderRow(currentOrderItems[index]);
    orderList.append(orderRow);
  }
}
