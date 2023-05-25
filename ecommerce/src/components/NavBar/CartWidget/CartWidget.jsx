import * as React from 'react';
import {useContext} from "react";
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './CartWidget.css';
import {useNavigate} from "react-router-dom";
import {CartContext} from "../../../context/CartProvider";

const CartWidget = () => {

    const navigate = useNavigate();
    const {cart} = useContext(CartContext);

    return (
        <React.Fragment>
            <IconButton onClick={()=>navigate(`/cart`)} aria-label="shopping cart button">
                <Badge className="shopping-cart__badge" badgeContent={cart.length} max={999}>
                    <ShoppingCartIcon className="shopping-cart__icon" />
                </Badge>
            </IconButton>
        </React.Fragment>
    )
}

export default CartWidget