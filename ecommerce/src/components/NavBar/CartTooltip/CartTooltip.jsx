import React, {useContext} from 'react'
import Typography from "@mui/material/Typography";
import {CartContext} from "../../../context/CartProvider";
import "./CartTooltip.css"

const CartTooltip = () => {

    const {cart, getTotalPaymentFromCart} = useContext(CartContext);

    return (
        <>
            <div className="cartTooltip">
                <Typography variant="h6" color="text.primary">
                    In your cart:
                </Typography>
                <ol className="cartList">
                    {cart.map(item =>
                        <li key={item.id}>
                            <Typography variant="p" color="text.primary">
                                {item.title}
                            </Typography>
                            <Typography variant="p" color="text.secondary">
                                - {item.count} item/s
                            </Typography>
                        </li>
                    )}
                </ol>
                <Typography variant="h6" gutterBottom color="text.secondary">
                    SubTotal: ${getTotalPaymentFromCart()}
                </Typography>
            </div>
        </>
    )
}
export default CartTooltip
