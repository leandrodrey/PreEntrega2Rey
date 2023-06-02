import React, {createContext, useState} from 'react';
import {getTotalPaymentFromCart} from "../helpers";

export const CartContext = createContext('')

const CartProvider = ({children}) => {

    const [cart, setCart] = useState([]);
    const addCart = (item) => {
        if (checkIfItemExistInCart(item.id)) {
            setCart([...cart, item.count++])
        } else {
            setCart([...cart, item])
        }
    }
    const checkIfItemExistInCart = (id) => {
        return cart.find(item => item.id === id);
    }

    const totalPayments = getTotalPaymentFromCart(cart);

    return (
        <CartContext.Provider value={{cart, addCart, totalPayments}}>
            {children}
        </CartContext.Provider>
    )

}
export default CartProvider;
