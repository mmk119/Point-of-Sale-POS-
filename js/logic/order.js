// The order array and functions to add, increase, decrease, remove, and clear items.
let orderItems = [];

function findProductById(productId) {
  for (let index = 0; index < products.length; index++) {
    if (products[index].id === productId) {
      return products[index];
    }
  }
  return null;
}

function findOrderItemIndex(productId) {
  for (let index = 0; index < orderItems.length; index++) {
    if (orderItems[index].productId === productId) {
      return index;
    }
  }
  return -1;
}

function addProductToOrder(productId) {
  const product = findProductById(productId);
  if (product === null) {
    return;
  }

  const orderItemIndex = findOrderItemIndex(productId);
  if (orderItemIndex !== -1) {
    orderItems[orderItemIndex].quantity = orderItems[orderItemIndex].quantity + 1;
  } else {
    // Copy name and price so the order does not depend on the product list later.
    const newOrderItem = {
      productId: product.id,
      name: product.name,
      price: product.price,
      quantity: 1
    };
    orderItems.push(newOrderItem);
  }
}

function getOrderItems() {
  return orderItems;
}
