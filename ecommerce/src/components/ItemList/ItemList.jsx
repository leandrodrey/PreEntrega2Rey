import React from 'react'
import Grid from "@mui/material/Unstable_Grid2";
import Item from "../Item/Item";

const ItemList = (props) => {

    const {items} = props;

    return (
        <React.Fragment>
            {items.map(({id, title, description, image, price}) => (
                <Grid key={id}>
                    <Item id={id} title={title} description={description} image={image} price={price} />
                </Grid>
            ))}
        </React.Fragment>
    )
}
export default ItemList
