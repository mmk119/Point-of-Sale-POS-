// Read the custom product form, show its message, and reset it.
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
