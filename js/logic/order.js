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

function increaseQuantity(productId) {
  const orderItemIndex = findOrderItemIndex(productId);
  if (orderItemIndex === -1) {
    return;
  }
  orderItems[orderItemIndex].quantity = orderItems[orderItemIndex].quantity + 1;
}

function decreaseQuantity(productId) {
  const orderItemIndex = findOrderItemIndex(productId);
  if (orderItemIndex === -1) {
    return;
  }

  if (orderItems[orderItemIndex].quantity > 1) {
    orderItems[orderItemIndex].quantity = orderItems[orderItemIndex].quantity - 1;
  } else {
    removeFromOrder(productId);
  }
}

function removeFromOrder(productId) {
  const orderItemIndex = findOrderItemIndex(productId);
  // splice(-1, 1) would remove the last item, so stop if the product is not in the order.
  if (orderItemIndex === -1) {
    return;
  }
  orderItems.splice(orderItemIndex, 1);
}
