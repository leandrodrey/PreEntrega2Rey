import React, {useContext, useEffect, useState} from 'react'
import Grid from "@mui/material/Unstable_Grid2";
import Item from "../Item/Item";
import {CartContext} from "../../context/CartProvider";
import Loader from "../Loader/Loader";

const ItemList = (props) => {

    const {items} = props;
    const {addCart} = useContext(CartContext);

    const [loader, setLoader] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoader(false);
        }, 1000);
    }, []);

    return (
        <React.Fragment>
            { loader ?
                <Loader showLoader={true}/>
            :
                <React.Fragment>
                    {items.map(({id, title, description, image, price}) => (
                        <Grid key={id}>
                            <Item id={id} title={title} description={description} image={image} price={price} addCart={addCart}/>
                        </Grid>
                    ))}
                </React.Fragment>
            }
        </React.Fragment>
    )
}
export default ItemList;
