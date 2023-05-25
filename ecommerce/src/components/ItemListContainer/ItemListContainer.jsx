import React, {useContext, useEffect, useState} from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import {useNavigate, useParams} from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import Button from "@mui/material/Button";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import "./ItemListContainer.css";
import {ProductContext} from "../../context/ProductProvider";

const ItemListContainer = () => {

    const navigate = useNavigate();
    const {categoryId} = useParams();
    const [filteredItem, setFilteredItem] = useState([]);
    const {products} = useContext(ProductContext);

    useEffect(() => {
        if (categoryId) {
            const filteredItems = products.filter(
                (filteredItem) => filteredItem.categoryId === categoryId
            );
            setFilteredItem(filteredItems);
        } else {
            setFilteredItem(products);
        }
    }, [categoryId, products]);

    return (
        <React.Fragment>
            <Box sx={{ flexGrow: 1 }}>
                {categoryId &&
                    <Grid className="itemListContainer__category" xs={12}>
                        <Button className="itemDetailContainer__goback" onClick={()=>navigate(`/`)} size="small" startIcon={<ArrowBackIosIcon />}>All products</Button>
                    </Grid>
                }
                <Grid container spacing={3}>
                    <ItemList items={filteredItem} />
                </Grid>
            </Box>
        </React.Fragment>
    )
}
export default ItemListContainer
