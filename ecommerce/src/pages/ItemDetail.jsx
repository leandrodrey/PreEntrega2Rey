import React from 'react'
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import {useNavigate} from "react-router-dom";
import Button from "@mui/material/Button";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const ItemDetail = () => {

    const navigate = useNavigate()

    return (
        <React.Fragment>
            <Container disableGutters maxWidth="md">
                <Box>
                    <h2>Item title</h2>
                </Box>
                <Box sx={{ flexGrow: 1 }}>
                    Description
                </Box>
                <Box>
                    <Button onClick={()=>navigate(-1)} size="small" startIcon={<ArrowBackIosIcon />}>Go back</Button>
                </Box>
            </Container>
        </React.Fragment>
    )
}
export default ItemDetail
