// Draw the product tiles.
const productGrid = document.getElementById("product-grid");
const productSearchInput = document.getElementById("product-search");
const categoryFilterSelect = document.getElementById("category-filter");
const noProductsMessage = document.getElementById("no-products-message");

function createProductTileText(className, text) {
  const tileText = document.createElement("span");
  tileText.classList.add(className);
  tileText.textContent = text;
  return tileText;
}

// The whole tile is one button. The category class, like "tile-dairy", sets its colour.
function createProductCard(product) {
  const tile = document.createElement("button");
  tile.type = "button";
  tile.classList.add("tile", "product-tile", "tile-" + product.category.toLowerCase());
  tile.setAttribute("aria-label", "Add " + product.name + " to order");
  tile.addEventListener("click", function () {
    handleAddProduct(product.id);
  });

  tile.append(
    createProductTileText("product-name", product.name),
    createProductTileText("product-price", formatPrice(product.price))
  );
  return tile;
}

function renderProducts(productList) {
  productGrid.innerHTML = "";
  if (productList.length === 0) {
    noProductsMessage.classList.remove("hidden");
    return;
  }

  noProductsMessage.classList.add("hidden");
  for (let index = 0; index < productList.length; index++) {
    const productTile = createProductCard(productList[index]);
    productGrid.append(productTile);
  }
}

function updateProductList() {
  const visibleProducts = getVisibleProducts(productSearchInput.value, categoryFilterSelect.value);
  renderProducts(visibleProducts);
}
