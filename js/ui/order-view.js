// Draw the order rows and the empty order message.
const orderList = document.getElementById("order-list");
const emptyOrderMessage = document.getElementById("empty-order-message");
const clearOrderButton = document.getElementById("clear-order-button");
const payButton = document.getElementById("pay-button");

function createDecreaseButton(orderItem) {
  const decreaseButton = document.createElement("button");
  decreaseButton.type = "button";
  decreaseButton.classList.add("quantity-button");
  decreaseButton.textContent = "-";
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
  removeButton.textContent = "Remove";
  removeButton.setAttribute("aria-label", "Remove " + orderItem.name);
  removeButton.addEventListener("click", function () {
    handleRemove(orderItem.productId);
  });
  return removeButton;
}

function createQuantityControls(orderItem) {
  const rowControls = document.createElement("div");
  rowControls.classList.add("order-row-controls");

  const quantityText = document.createElement("span");
  quantityText.classList.add("order-row-quantity");
  quantityText.textContent = orderItem.quantity;

  rowControls.append(
    createDecreaseButton(orderItem),
    quantityText,
    createIncreaseButton(orderItem),
    createRemoveButton(orderItem)
  );
  return rowControls;
}

function createOrderRowInfo(orderItem) {
  const rowInfo = document.createElement("div");
  rowInfo.classList.add("order-row-info");

  const nameText = document.createElement("p");
  nameText.classList.add("order-row-name");
  nameText.textContent = orderItem.name;

  const unitPriceText = document.createElement("p");
  unitPriceText.classList.add("order-row-unit-price");
  unitPriceText.textContent = formatPrice(orderItem.price) + " each";

  rowInfo.append(nameText, unitPriceText);
  return rowInfo;
}

function createOrderRow(orderItem) {
  const row = document.createElement("li");
  row.classList.add("order-row");

  const lineTotalText = document.createElement("span");
  lineTotalText.classList.add("order-row-line-total");
  lineTotalText.textContent = formatPrice(calculateLineTotal(orderItem));

  row.append(createOrderRowInfo(orderItem), createQuantityControls(orderItem), lineTotalText);
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
