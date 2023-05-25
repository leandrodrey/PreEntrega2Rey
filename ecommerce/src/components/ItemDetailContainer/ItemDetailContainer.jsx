import React, {useContext, useEffect, useState} from 'react'
import {useParams} from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import {ProductContext} from "../../context/ProductProvider";

const ItemDetailContainer = () => {

    const {data} = useContext(ProductContext);
    const {id} = useParams();
    const [item, setItem] = useState({});

    useEffect(() => {
        const filter = data.find((item) => item.id === id);
        setItem(filter);
    }, []);

    return (
        <ItemDetail item={item} />
    )
}
export default ItemDetailContainer
