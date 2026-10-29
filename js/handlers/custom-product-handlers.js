// Handle the custom product form being submitted.
function handleCustomProductSubmit(event) {
  event.preventDefault();
  const customProduct = readCustomProductForm();
  const errorMessage = getCustomProductError(customProduct.name, customProduct.price);
  if (errorMessage !== "") {
    showCustomProductMessage(errorMessage, true);
    return;
  }

  addCustomProduct(customProduct.name, customProduct.price, customProduct.category);
  resetCustomProductForm();
  showCustomProductMessage("Product added.", false);
  updateProductList();
}
