import React, {useEffect, useState} from 'react'
import Button from "@mui/material/Button";
import {TextField} from "@mui/material";
import SendIcon from '@mui/icons-material/Send';

const Form = (props) => {

    const {total, items, handleSubmit} = props;

    const [form, setForm] = useState({
        buyer: {
            email: '',
            name: '',
            lastName: '',
            phone: ''
        },
        total,
        items
    });
    const handleChange = (e) => {
        const {name, value} = e.target;
        setForm({
            ...form,
            buyer: {
                ...form.buyer,
                [name]: value,
            }
        });
        handleSubmitForm(e);
    }

    const handleSubmitForm = (e) => {
        handleSubmit(e, form);
    }

    return (
        <form onSubmit={handleChange} action="">
            <TextField
                hiddenLabel
                type="email"
                name="email"
                placeholder="Email"
                variant="filled"
                size="small"
            />
            <TextField
                hiddenLabel
                type="text"
                name="name"
                placeholder="First Name"
                variant="filled"
                size="small"
            />
            <TextField
                hiddenLabel
                type="text"
                name="lastName"
                placeholder="Last Name"
                id="filled-hidden-label-normal"
                variant="filled"
                size="small"
            />
            <TextField
                hiddenLabel
                type="text"
                name="phone"
                placeholder="Phone"
                variant="filled"
                size="small"
            />
            <Button type="submit" variant="contained" endIcon={<SendIcon/>}>Send</Button>
        </form>
    )
}
export default Form;
