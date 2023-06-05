import React, {createContext, useState} from 'react';
import {getTotalPaymentFromCart} from "../helpers";

export const CartContext = createContext('')

const CartProvider = ({children}) => {

    const [cart, setCart] = useState([]);

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

    const totalPayments = getTotalPaymentFromCart(cart);

    return (
        <CartContext.Provider value={{cart, addCart, totalPayments}}>
            {children}
        </CartContext.Provider>
    )

}
export default CartProvider;
