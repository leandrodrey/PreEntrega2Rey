import React from 'react'
import ImgMediaCard from "./Card/Card";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';

const ItemListContainer = (props) => {
    return (
        <React.Fragment>
            <Box>
                <h2>{props.greetings}</h2>
            </Box>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={3}>
                    <Grid xs>
                        <ImgMediaCard />
                    </Grid>
                    <Grid xs>
                        <ImgMediaCard />
                    </Grid>
                    <Grid xs>
                        <ImgMediaCard />
                    </Grid>
                </Grid>
            </Box>
        </React.Fragment>
    )
}
export default ItemListContainer
