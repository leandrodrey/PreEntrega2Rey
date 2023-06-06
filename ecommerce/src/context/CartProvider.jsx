import React, {createContext, useEffect, useState} from 'react';

export const CartContext = createContext('')

const CartProvider = ({children}) => {

    const [cart, setCart] = useState([]);

    useEffect(() => {
        const storedCart = sessionStorage.getItem('cart');
        if (storedCart) {
            try {
                const parsedCart = JSON.parse(storedCart);
                console.log(parsedCart, 'parsedCart');
                if (Array.isArray(parsedCart)) {
                    setCart(parsedCart);
                } else {
                    console.log('Invalid cart data sessionStorage.');
                }
            } catch (error) {
                console.log('Error parsing cart data from sessionStorage:', error);
            }
        }
    }, []);

    console.log(cart, 'cart');

    useEffect(() => {
        sessionStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const addCart = (item) => {
        if (checkIfItemExistInCart(item.id)) {
            setCart(updatedCart(item.id));
        } else {
            setCart([...cart, item]);
        }
    };

    const updatedCart = (id) => cart.map((cartItem) => {
        if (cartItem.id === id) {
            return {
                ...cartItem,
                count: cartItem.count + 1
            };
        }
        return cartItem;
    });

    const checkIfItemExistInCart = (id) => {
        return cart.some((item) => item.id === id);
    }

    const getTotalPaymentFromCart = () => {
        return cart.reduce((prev, curr) => prev + (curr.price * curr.count), 0);
    };

    return (
        <CartContext.Provider value={{cart, addCart, getTotalPaymentFromCart}}>
            {children}
        </CartContext.Provider>
    )

}
export default CartProvider;
