import React, {createContext} from 'react'
import useFirebase from "../hooks/useFirebase";

export const ProductContext = createContext('')

const ProductProvider = ({children}) => {

    const {products} = useFirebase();
    const data = products;
    console.log(data)
    return (
        <ProductContext.Provider value={{data}}>
            {children}
        </ProductContext.Provider>
    )

}
export default ProductProvider
