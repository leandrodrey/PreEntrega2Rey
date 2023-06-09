import React, {useContext, useEffect, useState} from 'react'
import Button from "@mui/material/Button";
import {InputAdornment, TextField} from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import {LoaderContext} from "../../context/LoaderProvider";
import {OrderContext} from "../../context/OrderProvider";
import Loader from "../Loader/Loader";
import {ProductContext} from "../../context/ProductProvider";
import {CartContext} from "../../context/CartProvider";
import './Form.css'
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import PersonIcon from '@mui/icons-material/Person';
import Typography from "@mui/material/Typography";


const Form = (props) => {

    const {handleSubmit} = useContext(ProductContext);
    const {cart, getTotalPaymentFromCart, removeAllItemsFromCart} = useContext(CartContext);
    const {isLoading, stopLoader} = useContext(LoaderContext);
    const {order} = useContext(OrderContext);

    const [form, setForm] = useState({
        buyer: {
            email: '',
            name: '',
            lastName: '',
            phone: ''
        },
        total: getTotalPaymentFromCart(),
        items: cart
    });

    useEffect(() => {
        stopLoader();
    }, []);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setForm({
            ...form,
            buyer: {
                ...form.buyer,
                [name]: value,
            }
        });
    }

    const handleSubmitForm = (e) => {
        e.preventDefault();
        handleSubmit(form);
        removeAllItemsFromCart();
    }

    if (isLoading) {
        return (
            <Loader showLoader={isLoading}/>
        )
    }

    console.log(order, 'order in cart');
    if (order) {
        return (
            <div>
                <h1>Thank you for your purchase!</h1>
                <p>Your order number is: {order.id}</p>
            </div>
        )
    }

    return (
        <>
            <Typography variant="h5" gutterBottom color="text.secondary">
                Your information:
            </Typography>

            <form className="order_form" onSubmit={handleSubmitForm} action="">
                <TextField
                    onChange={handleChange}
                    hiddenLabel
                    type="email"
                    name="email"
                    placeholder="Email"
                    variant="filled"
                    size="small"
                    required
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <AlternateEmailIcon />
                            </InputAdornment>
                        ),
                    }}
                />
                <TextField
                    onChange={handleChange}
                    hiddenLabel
                    type="text"
                    name="phone"
                    placeholder="Phone"
                    variant="filled"
                    size="small"
                    required
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <PhoneAndroidIcon />
                            </InputAdornment>
                        ),
                    }}
                />
                <TextField
                    onChange={handleChange}
                    hiddenLabel
                    type="text"
                    name="name"
                    placeholder="First Name"
                    variant="filled"
                    size="small"
                    required
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <PersonIcon />
                            </InputAdornment>
                        ),
                    }}
                />
                <TextField
                    onChange={handleChange}
                    hiddenLabel
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    id="filled-hidden-label-normal"
                    variant="filled"
                    size="small"
                    required
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <PersonIcon />
                            </InputAdornment>
                        ),
                    }}
                />
                <Button type="submit" variant="contained" endIcon={<SendIcon/>}>Complete Order</Button>
            </form>
        </>
    )
}
export default Form;
