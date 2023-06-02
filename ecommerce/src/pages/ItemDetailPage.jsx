import React, {useContext, useEffect} from 'react'
import Container from "@mui/material/Container";
import {useParams} from "react-router-dom";
import {redirectsTo} from "../helpers";
import {ProductContext} from "../context/ProductProvider";
import ItemDetail from "../components/ItemDetail/ItemDetail";
import Typography from "@mui/material/Typography";

const ItemDetailPage = () => {

    const {id} = useParams();

    if (!id) {
        redirectsTo("/");
    }

    const {product, getProductById} = useContext(ProductContext);

    useEffect( () => {
        getProductById(id);
    }, []);

    if (!product) {
        return (
            <Typography>
                The item don't exist
            </Typography>
        )
    } else {
        return (
            <Container disableGutters maxWidth="md">
                <ItemDetail product={product} />
            </Container>
        )
    }

}
export default ItemDetailPage;
