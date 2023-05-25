
import {useState} from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import "./Item.css";
import {useNavigate} from "react-router-dom";
import {Divider} from "@mui/material";

export default function Item(props) {

    const {id, title, description, image, price, addCart} = props;
    const navigate = useNavigate();
    const [count, setCount] = useState(0);
    const handleSum = () => setCount(count + 1);
    const handleReset = () => setCount(count - 1);

    return (
        <Card sx={{ maxWidth: 400 }}>
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
            <Divider />
            <CardActions>
                <button onClick={()=>handleReset()} disabled={count === 0}>-</button>
                {count}
                <button onClick={()=>handleSum()}>+</button>
                <Button onClick={()=>addCart({title, description, price, count})} href="#text-buttons" size="small" startIcon={<ShoppingCartCheckoutIcon />}>Add to Cart</Button>
                <Button onClick={()=>navigate(`/item/${id}`)} size="small" startIcon={<AddIcon />}>View More</Button>
            </CardActions>
        </Card>
    );
}