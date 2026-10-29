// Draw the sales history.
const salesHistoryEmpty = document.getElementById("sales-history-empty");
const salesHistoryList = document.getElementById("sales-history-list");
const sessionTotalRow = document.getElementById("session-total-row");
const sessionTotalAmount = document.getElementById("session-total-amount");

function createHistoryLine(sale) {
  const line = document.createElement("li");
  line.classList.add("history-line");

  const saleNumberText = document.createElement("span");
  saleNumberText.classList.add("history-sale-number");
  saleNumberText.textContent = "#" + sale.saleNumber;

  const saleDetailsText = document.createElement("span");
  saleDetailsText.classList.add("history-details");
  saleDetailsText.textContent = formatTime(sale.createdAt) + " - " + formatItemCount(sale.itemCount);

  const saleTotalText = document.createElement("span");
  saleTotalText.classList.add("history-total");
  saleTotalText.textContent = formatPrice(sale.finalTotal);

  line.append(saleNumberText, saleDetailsText, saleTotalText);
  return line;
}

function renderSalesHistory() {
  const completedSalesList = getCompletedSales();
  salesHistoryList.innerHTML = "";

  if (completedSalesList.length === 0) {
    salesHistoryEmpty.classList.remove("hidden");
    sessionTotalRow.classList.add("hidden");
    return;
  }

  salesHistoryEmpty.classList.add("hidden");
  // Loop backwards so the newest sale is shown first.
  for (let index = completedSalesList.length - 1; index >= 0; index--) {
    salesHistoryList.append(createHistoryLine(completedSalesList[index]));
  }
  sessionTotalAmount.textContent = formatPrice(calculateSessionTotal());
  sessionTotalRow.classList.remove("hidden");
}
