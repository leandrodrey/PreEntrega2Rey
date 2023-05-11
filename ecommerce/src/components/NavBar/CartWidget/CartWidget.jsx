import * as React from 'react';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './CartWidget.css';

const CartWidget = () => {
    return (
        <React.Fragment>
            <IconButton aria-label="shopping cart button">
                <Badge className="shopping-cart__badge" badgeContent={4} max={999}>
                    <ShoppingCartIcon className="shopping-cart__icon" />
                </Badge>
            </IconButton>
        </React.Fragment>
    )
}

export default CartWidget