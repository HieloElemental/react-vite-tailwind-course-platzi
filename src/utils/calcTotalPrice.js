/**
 * This function calculates the price of a new order
 * @param {Array} products cartProduct: Array of Object
 * @returns {Number} Total price
 */

const calcTotalPrice = (products) => {
  const totalPrice = products.reduce((acc, product) => {
    return acc + product.price;
  }, 0);
  return totalPrice;
};

export { calcTotalPrice };
