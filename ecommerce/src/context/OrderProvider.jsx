import React, {createContext} from 'react'
import useFirebase from "../hooks/useFirebase";

export const OrderContext = createContext('')

const OrderProvider = ({children}) => {

    const { generatedOrder } = useFirebase();

    return (
        <OrderContext.Provider value={{ generatedOrder }}>
            {children}
        </OrderContext.Provider>
    )

}
export default OrderProvider;
