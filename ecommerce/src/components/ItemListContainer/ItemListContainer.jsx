import React, {useCallback, useContext, useEffect, useState} from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import {useNavigate, useParams} from "react-router-dom";
import Button from "@mui/material/Button";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import "./ItemListContainer.css";
import {ProductContext} from "../../context/ProductProvider";
import {CartContext} from "../../context/CartProvider";
import Loader from "../Loader/Loader";
import Item from "../Item/Item";

const ItemListContainer = () => {

    const {products, getProducts} = useContext(ProductContext);
    const {addCart} = useContext(CartContext);

    const navigate = useNavigate();
    const [loader, setLoader] = useState(true);
    const {categoryId} = useParams();
    const [filteredItem, setFilteredItem] = useState([]);

    const filterProducts = useCallback( () => {
        if (categoryId) {
            const filteredItems = products.filter((item) => item.categoryId === categoryId);
            setFilteredItem(filteredItems);
        } else {
            setFilteredItem(products);
        }
    }, [products, categoryId]);

    useEffect(() => {
        getProducts();
        filterProducts();
        setTimeout(() => {
            setLoader(false);
        }, 1000);
    }, [getProducts, filterProducts]);

    return (
        <React.Fragment>
            { loader ?
                <Loader showLoader={true}/>
                :
                <React.Fragment>
                    <Box sx={{ flexGrow: 1 }}>
                        {categoryId &&
                            <Grid className="itemListContainer__category" xs={12}>
                                <Button className="itemDetailContainer__goback" onClick={()=>navigate(`/`)} size="small" startIcon={<ArrowBackIosIcon />}>All products</Button>
                            </Grid>
                        }
                        <Grid container spacing={3}>
                            {filteredItem.map(({id, title, description, image, price}) => (
                                <Grid key={id}>
                                    <Item id={id} title={title} description={description} image={image} price={price} addCart={addCart}/>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                </React.Fragment>
            }
        </React.Fragment>
    )
}
export default ItemListContainer
