import React, {createContext} from 'react'

export const ProductContext = createContext("")

const ProductProvider = ({children}) => {

    const products = [
        {
            "title": "Pipo",
            "price": "2"
        },
        {
            "title": "Pepe",
            "price": "2"
        }
    ]

    return(
        <ProductContext.Provider value={{products}}>
            {children}
        </ProductContext.Provider>
    )

}
export default ProductProvider
