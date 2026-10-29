// Show and hide the receipt.
const receiptSection = document.getElementById("receipt-section");
const receiptStoreName = document.getElementById("receipt-store-name");
const receiptList = document.getElementById("receipt-list");
const receiptItemCount = document.getElementById("receipt-item-count");
const receiptSubtotal = document.getElementById("receipt-subtotal");
const receiptTotalAmount = document.getElementById("receipt-total-amount");
const newOrderButton = document.getElementById("new-order-button");
const posLayout = document.querySelector(".pos-layout");

newOrderButton.addEventListener("click", function () {
  handleNewOrder();
});

function createReceiptLine(receiptItem) {
  const line = document.createElement("li");
  line.classList.add("receipt-line");

  const nameText = document.createElement("span");
  nameText.classList.add("receipt-line-name");
  nameText.textContent = receiptItem.name + " x" + receiptItem.quantity;

  const lineTotalText = document.createElement("span");
  lineTotalText.textContent = formatPrice(calculateLineTotal(receiptItem));

  line.append(nameText, lineTotalText);
  return line;
}

function showReceipt(receipt) {
  receiptStoreName.textContent = STORE_NAME;
  receiptList.innerHTML = "";
  for (let index = 0; index < receipt.items.length; index++) {
    receiptList.append(createReceiptLine(receipt.items[index]));
  }

  receiptItemCount.textContent = receipt.itemCount;
  receiptSubtotal.textContent = formatPrice(receipt.subtotal);
  receiptTotalAmount.textContent = formatPrice(receipt.finalTotal);

  receiptSection.classList.remove("hidden");
  // inert stops keyboard users from tabbing to the products behind the receipt.
  posLayout.inert = true;
  newOrderButton.focus();
}

function hideReceipt() {
  receiptSection.classList.add("hidden");
  posLayout.inert = false;
}
