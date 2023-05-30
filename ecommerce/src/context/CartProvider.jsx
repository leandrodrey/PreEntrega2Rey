import React, {createContext, useMemo, useState} from 'react'

export const CartContext = createContext('')

const CartProvider = ({children}) => {

    const [cart, setCart] = useState([]);
    const addCart = (item) => setCart([...cart, item]);

    return (
        <CartContext.Provider value={{cart, addCart}}>
            {children}
        </CartContext.Provider>
    )

}
export default CartProvider
