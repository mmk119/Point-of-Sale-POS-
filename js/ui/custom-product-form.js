// Read and validate the custom product form.
const customProductForm = document.getElementById("custom-product-form");
const customProductNameInput = document.getElementById("custom-product-name");
const customProductPriceInput = document.getElementById("custom-product-price");
const customProductCategorySelect = document.getElementById("custom-product-category");
const customProductMessage = document.getElementById("custom-product-message");

function readCustomProductForm() {
  return {
    name: customProductNameInput.value.trim(),
    price: Number(customProductPriceInput.value),
    category: customProductCategorySelect.value
  };
}

// Returns an error message, or an empty string when the product is valid.
function getCustomProductError(productName, productPrice) {
  if (productName === "") {
    return "Please enter a product name.";
  }
  if (productName.length > MAX_PRODUCT_NAME_LENGTH) {
    return "Name must be " + MAX_PRODUCT_NAME_LENGTH + " characters or fewer.";
  }
  if (isProductNameTaken(productName)) {
    return "A product with this name already exists.";
  }
  if (isNaN(productPrice) || productPrice <= 0) {
    return "Price must be a number greater than 0.";
  }
  if (productPrice > MAX_PRODUCT_PRICE) {
    return "Price must be " + formatPrice(MAX_PRODUCT_PRICE) + " or less.";
  }
  return "";
}

function showCustomProductMessage(message, isError) {
  customProductMessage.textContent = message;
  if (isError) {
    customProductMessage.classList.add("is-error");
    customProductMessage.classList.remove("is-success");
  } else {
    customProductMessage.classList.add("is-success");
    customProductMessage.classList.remove("is-error");
  }
}

function resetCustomProductForm() {
  customProductForm.reset();
}
