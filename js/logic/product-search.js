// Search products by name and filter them by category.
function searchProductsByName(productList, searchText) {
  const cleanSearchText = searchText.trim().toLowerCase();
  if (cleanSearchText === "") {
    return productList;
  }

  const matchingProducts = [];
  for (let index = 0; index < productList.length; index++) {
    if (productList[index].name.toLowerCase().includes(cleanSearchText)) {
      matchingProducts.push(productList[index]);
    }
  }
  return matchingProducts;
}

function filterProductsByCategory(productList, category) {
  if (category === ALL_CATEGORIES) {
    return productList;
  }

  const productsInCategory = [];
  for (let index = 0; index < productList.length; index++) {
    if (productList[index].category === category) {
      productsInCategory.push(productList[index]);
    }
  }
  return productsInCategory;
}

function getVisibleProducts(searchText, category) {
  const productsInCategory = filterProductsByCategory(products, category);
  return searchProductsByName(productsInCategory, searchText);
}
