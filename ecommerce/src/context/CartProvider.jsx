import React, {createContext, useState} from 'react';
import {getTotalItems} from "../helpers";

export const CartContext = createContext('')

const CartProvider = ({children}) => {

    const [cart, setCart] = useState([]);
    const addCart = (item) => setCart([...cart, item]);

    const totalItems = getTotalItems(cart);

    return (
        <CartContext.Provider value={{cart, addCart, totalItems}}>
            {children}
        </CartContext.Provider>
    )

}
export default CartProvider;
