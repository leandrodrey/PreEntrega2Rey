import React, {createContext, useState} from 'react';
import {getTotalItems, getTotalPayment, getTotalPaymentFromCart} from "../helpers";

export const CartContext = createContext('')

const CartProvider = ({children}) => {

    const [cart, setCart] = useState([]);
    const addCart = (item) => setCart([...cart, item]);

    const totalPayments = getTotalPaymentFromCart(cart);

    return (
        <CartContext.Provider value={{cart, addCart, totalPayments}}>
            {children}
        </CartContext.Provider>
    )

}
export default CartProvider;
