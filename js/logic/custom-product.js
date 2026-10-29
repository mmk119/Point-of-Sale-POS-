// Create custom products and add them to the product list.
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
