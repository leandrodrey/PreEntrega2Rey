import React, {createContext, useMemo, useState} from 'react'

export const CartContext = createContext('')

const CartProvider = ({children}) => {

    const [cart, setCart] = useState([]);
    const addCart = (item) => setCart([...cart, item]);
    const value = useMemo(() => ({cart}), [cart]);

    return (
        <CartContext.Provider value={{value, addCart}}>
            {children}
        </CartContext.Provider>
    )

}
export default CartProvider
