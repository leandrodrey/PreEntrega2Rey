
import React, {useContext} from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import "./Item.css";
import {useNavigate} from "react-router-dom";
import {Divider} from "@mui/material";
import useItemCount from "../../hooks/useItemCount";
import {CartContext} from "../../context/CartProvider";

const Item = ({id, title, description, image, price}) => {

    const {addCart} = useContext(CartContext);
    const navigate = useNavigate();
    const {count, handleSum, handleRest} = useItemCount();

    return (
        <Card sx={{maxWidth: 400}}>
            <CardMedia
                component="img"
                alt={title}
                height="300"
                image={image}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
                <Typography className="imgMediaCard__price" variant="h4" color="text.secondary">
                    ${price}
                </Typography>
            </CardContent>
            <Divider/>
            <CardActions>
                <Button className="cardActions__restButton" color="secondary" onClick={() => handleRest()}
                        disabled={count === 1}><ChevronLeftIcon/></Button>
                <span>{count}</span>
                <Button className="cardActions__sumButton" color="secondary"
                        onClick={() => handleSum()}><ChevronRightIcon/></Button>

                <Button onClick={() => addCart({title, description, price, count})} href="#"
                        size="small" startIcon={<ShoppingCartCheckoutIcon/>}>Add to Cart</Button>
                <Button onClick={() => navigate(`/item/${id}`)} size="small" startIcon={<AddIcon/>}>View More</Button>
            </CardActions>
        </Card>
    )

}

export default Item;
