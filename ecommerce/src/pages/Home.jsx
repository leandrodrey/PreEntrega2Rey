import React, {useContext, useEffect} from 'react'
import {ProductContext} from "../context/ProductProvider";
import {useParams} from "react-router-dom";
import ItemList from "../components/ItemList/ItemList";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Home = () => {

    const {products, getProducts, getProductsByCategoryId} = useContext(ProductContext);
    const {categoryId} = useParams();

    useEffect(() => {
        {categoryId ? getProductsByCategoryId(categoryId) : getProducts()}
    }, []);

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
