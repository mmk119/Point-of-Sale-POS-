// Draw the sales history table.
const salesHistoryEmpty = document.getElementById("sales-history-empty");
const salesHistoryList = document.getElementById("sales-history-list");
const sessionTotalRow = document.getElementById("session-total-row");
const sessionTotalAmount = document.getElementById("session-total-amount");

function createHistoryCell(text, className) {
  const cell = document.createElement("td");
  cell.textContent = text;
  if (className !== "") {
    cell.classList.add(className);
  }
  return cell;
}

function createHistoryLine(sale) {
  const row = document.createElement("tr");
  row.append(
    createHistoryCell("#" + sale.saleNumber, ""),
    createHistoryCell(formatTime(sale.createdAt), ""),
    createHistoryCell(sale.itemCount, "col-number"),
    createHistoryCell(formatPrice(sale.finalTotal), "col-number")
  );
  return row;
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
