import React, {createContext} from 'react'
import useFirebase from "../hooks/useFirebase";

export const ProductContext = createContext('')

const ProductProvider = ({children}) => {

    const {products, getProducts, handleSubmit} = useFirebase();

    return (
        <ProductContext.Provider value={{products, getProducts, handleSubmit}}>
            {children}
        </ProductContext.Provider>
    )

}
export default ProductProvider;
