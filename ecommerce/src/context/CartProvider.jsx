import React, {createContext, useState} from 'react'

export const CartContext = createContext('')

const CartProvider = ({children}) => {

    const [cart, setCart] = useState([]);
    const addCart = (item) => setCart([...cart, item]);

    const total = cart.reduce((prev, curr) => prev + (curr.price * curr.count), 0);

    return (
        <CartContext.Provider value={{cart, addCart, total}}>
            {children}
        </CartContext.Provider>
    )

}
export default CartProvider;
