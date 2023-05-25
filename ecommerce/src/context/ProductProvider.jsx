import React, {createContext, useEffect} from 'react'
import useFirebase from "../hooks/useFirebase";

export const ProductContext = createContext('')

const ProductProvider = ({children}) => {

    const {products, getProducts} = useFirebase();

    useEffect(() => {
        getProducts();
    },[]);

    return (
        <ProductContext.Provider value={{products}}>
            {children}
        </ProductContext.Provider>
    )

}
export default ProductProvider
