// Show the store name in the header and the tab title.
const storeNameHeading = document.getElementById("store-name");

function renderStoreName() {
  storeNameHeading.textContent = STORE_NAME;
  document.title = STORE_NAME + " POS";
}
