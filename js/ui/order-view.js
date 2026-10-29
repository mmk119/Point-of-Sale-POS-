// Draw the order table rows and the empty order row.
const orderList = document.getElementById("order-list");
const emptyOrderMessage = document.getElementById("empty-order-message");
const clearOrderButton = document.getElementById("clear-order-button");
const payButton = document.getElementById("pay-button");

function createDecreaseButton(orderItem) {
  const decreaseButton = document.createElement("button");
  decreaseButton.type = "button";
  decreaseButton.classList.add("quantity-button");
  decreaseButton.textContent = "−";
  decreaseButton.setAttribute("aria-label", "Decrease quantity of " + orderItem.name);
  decreaseButton.addEventListener("click", function () {
    handleDecrease(orderItem.productId);
  });
  return decreaseButton;
}

function createIncreaseButton(orderItem) {
  const increaseButton = document.createElement("button");
  increaseButton.type = "button";
  increaseButton.classList.add("quantity-button");
  increaseButton.textContent = "+";
  increaseButton.setAttribute("aria-label", "Increase quantity of " + orderItem.name);
  increaseButton.addEventListener("click", function () {
    handleIncrease(orderItem.productId);
  });
  return increaseButton;
}

function createRemoveButton(orderItem) {
  const removeButton = document.createElement("button");
  removeButton.type = "button";
  removeButton.classList.add("remove-button");
  removeButton.textContent = "×";
  removeButton.setAttribute("aria-label", "Remove " + orderItem.name);
  removeButton.addEventListener("click", function () {
    handleRemove(orderItem.productId);
  });
  return removeButton;
}

function createOrderCell(className, text) {
  const cell = document.createElement("td");
  cell.classList.add(className);
  cell.textContent = text;
  return cell;
}

function createQuantityCell(orderItem) {
  const cell = document.createElement("td");
  cell.classList.add("col-qty");

  const quantityText = document.createElement("span");
  quantityText.classList.add("order-quantity");
  quantityText.textContent = orderItem.quantity;

  cell.append(createDecreaseButton(orderItem), quantityText, createIncreaseButton(orderItem));
  return cell;
}

function createRemoveCell(orderItem) {
  const cell = document.createElement("td");
  cell.classList.add("col-remove");
  cell.append(createRemoveButton(orderItem));
  return cell;
}

function createOrderRow(orderItem) {
  const row = document.createElement("tr");
  row.append(
    createOrderCell("order-name", orderItem.name),
    createQuantityCell(orderItem),
    createOrderCell("col-price", formatPrice(orderItem.price)),
    createOrderCell("col-amount", formatPrice(calculateLineTotal(orderItem))),
    createRemoveCell(orderItem)
  );
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

function updateOrderButtons() {
  const isOrderEmpty = getOrderItems().length === 0;
  clearOrderButton.disabled = isOrderEmpty;
  payButton.disabled = isOrderEmpty;
}
