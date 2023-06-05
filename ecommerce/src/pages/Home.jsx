import React, {useContext, useEffect, useState} from 'react'
import {ProductContext} from "../context/ProductProvider";
import {useParams} from "react-router-dom";
import ItemList from "../components/ItemList/ItemList";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Loader from "../components/Loader/Loader";
import useLoader from "../hooks/useLoader";

const Home = () => {

    const {products, getProducts, getProductsByCategoryId} = useContext(ProductContext);
    const {categoryId} = useParams();
    const {showLoader, startLoader, stopLoader} = useLoader();

    useEffect(() => {
        startLoader();
        categoryId ? getProductsByCategoryId(categoryId) : getProducts()
        setTimeout(() => {
            stopLoader();
        }, 1000);
    }, []);

    if (showLoader) {
        return (
            <Loader showLoader={true} />
        )
    }

    if (products) {
        return (
            <>
                <Box>
                    <Typography variant="h3" gutterBottom color="text.secondary">
                        Hot Items!
                    </Typography>
                </Box>
                <ItemList products={products} categoryId={categoryId} />
            </>
        )
    } else {
        return (
            <Typography variant="h4" gutterBottom color="text.secondary">
                Products not found
            </Typography>
        )
    }

}
export default Home;
