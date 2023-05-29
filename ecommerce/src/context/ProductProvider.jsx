import React, {createContext, useEffect, useMemo} from 'react'
import useFirebase from "../hooks/useFirebase";

export const ProductContext = createContext('')

const ProductProvider = ({children}) => {

    const {products, getProducts} = useFirebase();
    const value = useMemo(() => ({products}), [products]);

    useEffect(() => {
        getProducts();
    },[getProducts]);

    return (
        <ProductContext.Provider value={value}>
            {children}
        </ProductContext.Provider>
    )

}
export default ProductProvider
