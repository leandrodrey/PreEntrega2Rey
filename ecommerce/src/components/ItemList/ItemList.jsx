import React, {useContext, useState} from 'react'
import Grid from "@mui/material/Unstable_Grid2";
import Item from "../Item/Item";
import {CartContext} from "../../context/CartProvider";

const ItemList = (props) => {

    const {items} = props;
    const {addCart} = useContext(CartContext);

    return (
        <React.Fragment>
            {items.map(({id, title, description, image, price}) => (
                <Grid key={id}>
                    <Item id={id} title={title} description={description} image={image} price={price} addCart={addCart} />
                </Grid>
            ))}
        </React.Fragment>
    )
}
export default ItemList
