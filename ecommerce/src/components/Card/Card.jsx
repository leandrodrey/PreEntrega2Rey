import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ImgPlaceHolder from './images/gokuTest.jpg';

export default function ImgMediaCard() {
    return (
        <Card sx={{ maxWidth: 400 }}>
            <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image={ImgPlaceHolder}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Goku
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Son Gokū es un personaje ficticio, protagonista de la serie de manga y anime Dragon Ball. Fue creado por Akira Toriyama en 1984.
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Add to Cart</Button>
                <Button size="small">View More</Button>
            </CardActions>
        </Card>
    );
}