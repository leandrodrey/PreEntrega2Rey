import React from 'react'
import Container from "@mui/material/Container";
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer";

const ItemDetailPage = () => {

    return (
        <React.Fragment>
            <Container disableGutters maxWidth="md">
                <ItemDetailContainer />
            </Container>
        </React.Fragment>
    )
}
export default ItemDetailPage
