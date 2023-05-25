import React, {createContext} from 'react'
import data from "../items.json";

export const ProductContext = createContext('')

const ProductProvider = ({children}) => {

    return (
        <ProductContext.Provider value={{data}}>
            {children}
        </ProductContext.Provider>
    )

}
export default ProductProvider
