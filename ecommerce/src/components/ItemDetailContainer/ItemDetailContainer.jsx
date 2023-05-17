import React, {useEffect, useState} from 'react'
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import {Divider, Paper} from "@mui/material";
import {useNavigate, useParams} from "react-router-dom";
import data from "../../items.json";
import "./ItemDetailContainer.css";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import Grid from "@mui/material/Unstable_Grid2";

const ItemDetail = () => {
    const navigate = useNavigate();
    const {id} = useParams();

    const [item, setItem] = useState({});

    useEffect(() => {
        const filter = data.find((item) => item.id === id);
        setItem(filter);
    }, []);

    return (
        <React.Fragment>
            <Grid className="itemDetailContainer__header" container spacing={2}>
                <Grid xs={8}>
                    <Typography className="itemDetailContainer__title" variant="h3" color="text.secondary">
                        {item.title}
                    </Typography>
                </Grid>
                <Grid xs={4}>
                    <Typography className="itemDetailContainer__price" variant="h3" color="text.secondary">
                        ${item.price}
                    </Typography>
                </Grid>
            </Grid>
            <Paper elevation={3}>
                <CardMedia
                    component="img"
                    alt={item.title}
                    height="500"
                    image={item.image}
                />
                <Typography className="itemDetailContainer__description" variant="body1" gutterBottom color="text.secondary" paragraph={true}>
                    {item.description}
                </Typography>
                <Divider />
                <Grid className="itemDetailContainer__footer" container spacing={2}>
                    <Grid xs={8}>
                        <Button className="itemDetailContainer__goback" onClick={()=>navigate(-1)} size="small" startIcon={<ArrowBackIosIcon />}>Go back</Button>
                    </Grid>
                    <Grid className="itemDetailContainer__gridCartButton" xs={4}>
                        <Button href="#text-buttons" size="small" startIcon={<ShoppingCartCheckoutIcon />}>Add to Cart</Button>
                    </Grid>
                </Grid>
            </Paper>
        </React.Fragment>
    )
}
export default ItemDetail
