import React, {useContext} from 'react'
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Form from "../components/Form/Form";
import {CartContext} from "../context/CartProvider";
import {ProductContext} from "../context/ProductProvider";

const Cart = () => {

    const {cart, totalPayments} = useContext(CartContext);
    const {handleSubmit} = useContext(ProductContext);

    return (
        <Box>
            <Typography variant="h3" gutterBottom color="text.secondary">
                Cart
            </Typography>
            <Typography variant="h5" gutterBottom color="text.secondary">
                {cart.map(item =>
                    <li key={item.title}>
                        {item.title} - Count: {item.count}
                    </li>
                )}
                Total: ${totalPayments}
            </Typography>
            <Form total={cart.length} items={cart} handleSubmit={handleSubmit}/>
        </Box>
    )
}
export default Cart;
