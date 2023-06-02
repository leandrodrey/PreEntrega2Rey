export const getTotalPaymentFromCart = (cart) => {
    return cart.reduce((prev, curr) => prev + (curr.price * curr.count), 0);
};
