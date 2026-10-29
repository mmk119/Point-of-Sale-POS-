// Show and hide the receipt.
const receiptSection = document.getElementById("receipt-section");
const receiptStoreName = document.getElementById("receipt-store-name");
const receiptSaleNumber = document.getElementById("receipt-sale-number");
const receiptDateTime = document.getElementById("receipt-date-time");
const receiptList = document.getElementById("receipt-list");
const receiptItemCount = document.getElementById("receipt-item-count");
const receiptSubtotal = document.getElementById("receipt-subtotal");
const receiptDiscountRow = document.getElementById("receipt-discount-row");
const receiptDiscountLabel = document.getElementById("receipt-discount-label");
const receiptDiscount = document.getElementById("receipt-discount");
const receiptTotalAmount = document.getElementById("receipt-total-amount");
const receiptAmountPaid = document.getElementById("receipt-amount-paid");
const receiptChange = document.getElementById("receipt-change");
const newOrderButton = document.getElementById("new-order-button");
const posLayout = document.querySelector(".pos-layout");

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

function renderReceiptLines(receiptItems) {
  receiptList.innerHTML = "";
  for (let index = 0; index < receiptItems.length; index++) {
    receiptList.append(createReceiptLine(receiptItems[index]));
  }
}

function renderReceiptDiscount(discount) {
  if (discount === 0) {
    receiptDiscountRow.classList.add("hidden");
    return;
  }

  receiptDiscountLabel.textContent = formatDiscountLabel();
  receiptDiscount.textContent = "-" + formatPrice(discount);
  receiptDiscountRow.classList.remove("hidden");
}

function renderReceiptTotals(receipt) {
  receiptItemCount.textContent = receipt.itemCount;
  receiptSubtotal.textContent = formatPrice(receipt.subtotal);
  renderReceiptDiscount(receipt.discount);
  receiptTotalAmount.textContent = formatPrice(receipt.finalTotal);
  receiptAmountPaid.textContent = formatPrice(receipt.amountPaid);
  receiptChange.textContent = formatPrice(receipt.change);
}

function showReceipt(receipt) {
  receiptStoreName.textContent = STORE_NAME;
  receiptSaleNumber.textContent = "Sale #" + receipt.saleNumber;
  receiptDateTime.textContent = formatDateTime(receipt.createdAt);
  renderReceiptLines(receipt.items);
  renderReceiptTotals(receipt);

  receiptSection.classList.remove("hidden");
  // inert stops keyboard users from tabbing to the products behind the receipt.
  posLayout.inert = true;
  newOrderButton.focus();
}

function hideReceipt() {
  receiptSection.classList.add("hidden");
  posLayout.inert = false;
}
