import React, {useContext, useEffect, useState} from 'react'
import {useParams} from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import {ProductContext} from "../../context/ProductProvider";

const ItemDetailContainer = () => {

    const {products} = useContext(ProductContext);
    const {id} = useParams();
    const [item, setItem] = useState({});

    useEffect(() => {
        const filter = products.find((item) => item.id === id);
        setItem(filter);
    }, [id, products]);

    return (
        <ItemDetail item={item} />
    )
}
export default ItemDetailContainer
