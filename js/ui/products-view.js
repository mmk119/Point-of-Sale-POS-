// Draw the product cards.
const productGrid = document.getElementById("product-grid");
const productSearchInput = document.getElementById("product-search");
const categoryFilterSelect = document.getElementById("category-filter");
const noProductsMessage = document.getElementById("no-products-message");

function createAddButton(product) {
  const addButton = document.createElement("button");
  addButton.type = "button";
  addButton.classList.add("button", "button-primary", "add-button");
  addButton.textContent = "Add";
  addButton.setAttribute("aria-label", "Add " + product.name + " to order");
  addButton.addEventListener("click", function () {
    handleAddProduct(product.id);
  });
  return addButton;
}

function createProductCard(product) {
  const card = document.createElement("article");
  card.classList.add("product-card");

  const nameHeading = document.createElement("h3");
  nameHeading.classList.add("product-name");
  nameHeading.textContent = product.name;

  const categoryText = document.createElement("p");
  categoryText.classList.add("product-category");
  categoryText.textContent = product.category;

  const priceText = document.createElement("p");
  priceText.classList.add("product-price");
  priceText.textContent = formatPrice(product.price);

  card.append(nameHeading, categoryText, priceText, createAddButton(product));
  return card;
}

function renderProducts(productList) {
  productGrid.innerHTML = "";
  if (productList.length === 0) {
    noProductsMessage.classList.remove("hidden");
    return;
  }

  noProductsMessage.classList.add("hidden");
  for (let index = 0; index < productList.length; index++) {
    const productCard = createProductCard(productList[index]);
    productGrid.append(productCard);
  }
}

function updateProductList() {
  const visibleProducts = getVisibleProducts(productSearchInput.value, categoryFilterSelect.value);
  renderProducts(visibleProducts);
}
