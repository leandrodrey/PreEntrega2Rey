export const redirectsTo = (path) => {
    return (window.location.href = path);
};

export const getTotalItems = (cart) => {
    return cart.reduce((prev, curr) => prev + (curr.price * curr.count), 0);
};
