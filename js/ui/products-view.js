// Draw the product cards.
const productGrid = document.getElementById("product-grid");

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

  const addButton = document.createElement("button");
  addButton.type = "button";
  addButton.classList.add("button", "button-primary", "add-button");
  addButton.textContent = "Add";

  card.append(nameHeading, categoryText, priceText, addButton);
  return card;
}

function renderProducts(productList) {
  productGrid.innerHTML = "";
  for (let index = 0; index < productList.length; index++) {
    const productCard = createProductCard(productList[index]);
    productGrid.append(productCard);
  }
}
