// Validate custom products and add them to the product list.
function getNextProductId() {
  let highestId = 0;
  for (let index = 0; index < products.length; index++) {
    if (products[index].id > highestId) {
      highestId = products[index].id;
    }
  }
  return highestId + 1;
}

function isProductNameTaken(productName) {
  const lowerCaseName = productName.toLowerCase();
  for (let index = 0; index < products.length; index++) {
    if (products[index].name.toLowerCase() === lowerCaseName) {
      return true;
    }
  }
  return false;
}

function addCustomProduct(productName, productPrice, productCategory) {
  const newProduct = {
    id: getNextProductId(),
    name: productName,
    price: roundToCents(productPrice),
    category: productCategory
  };
  products.push(newProduct);
  return newProduct;
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
