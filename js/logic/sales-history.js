// Save and read completed sales for the current session.
let completedSales = [];

function getNextSaleNumber() {
  return completedSales.length + 1;
}

function saveSale(receipt) {
  completedSales.push(receipt);
}

function getCompletedSales() {
  return completedSales;
}

function calculateSessionTotal() {
  let sessionTotal = 0;
  for (let index = 0; index < completedSales.length; index++) {
    sessionTotal = sessionTotal + completedSales[index].finalTotal;
  }
  return sessionTotal;
}
