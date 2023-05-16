import React from 'react'
import ImgMediaCard from "../ImgMediaCard/ImgMediaCard";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';

const ItemListContainer = (props) => {

    const listItems = props.items;

    return (
        <React.Fragment>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={3}>
                    {listItems.map(({id, title, description, image, price}) => (
                        <Grid key={id} xs>
                            <ImgMediaCard id={id} title={title} description={description} image={image} price={price} />
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </React.Fragment>
    )
}
export default ItemListContainer
