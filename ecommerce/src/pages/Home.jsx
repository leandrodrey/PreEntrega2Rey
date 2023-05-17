import React from 'react'
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const Home = () => {
    return (
        <React.Fragment>
            <Box>
                <Typography variant="h3" gutterBottom color="text.secondary">
                    Hot Items!
                </Typography>
            </Box>
            <ItemListContainer />
        </React.Fragment>
    )
}
export default Home
