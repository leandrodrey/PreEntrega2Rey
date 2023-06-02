export const getTotalPayment = (cart) => {
    return cart.reduce((prev, curr) => prev + (curr.price * curr.count), 0);
};
