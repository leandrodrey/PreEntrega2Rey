import React, {useContext, useEffect} from 'react'
import Container from "@mui/material/Container";
import {useNavigate, useParams} from "react-router-dom";
import {redirectsTo} from "../helpers";
import {ProductContext} from "../context/ProductProvider";
import ItemDetail from "../components/ItemDetail/ItemDetail";
import Typography from "@mui/material/Typography";

const ItemDetailPage = () => {

    const {id} = useParams();

    const {product, getProductById} = useContext(ProductContext);

    useEffect( () => {
        getProductById(id);
    }, []);

    if (product) {
        return (
            <Container disableGutters maxWidth="md">
                <ItemDetail product={product} />
            </Container>
        )
    } else {
        return (
            <Typography variant="h4" gutterBottom color="text.secondary">
                Product not found
            </Typography>
        )
    }

}
export default ItemDetailPage;
