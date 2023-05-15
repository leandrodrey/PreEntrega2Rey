import React from 'react'
import ItemListContainer from "../components/ItemListContainer";
import ImgPlaceHolder from "../images/gokuTest.jpg";

const allItems = [
    {
        id: 5,
        title: "Store",
        description: "Never love the source, for you cannot understand it.",
        image: ImgPlaceHolder,
        price: 500
    },
    {
        id: 6,
        title: "Store",
        description: "With chilis drink joghurt.",
        image: ImgPlaceHolder,
        price: 500
    },
    {
        id: 7,
        title: "Store",
        description: "God, dead fish. you won't mark the quarter-deck.",
        image: ImgPlaceHolder,
        price: 500
    },
    {
        id: 8,
        title: "Store",
        description: "Countless green people handle post-apocalyptic, neutral tribbles.",
        image: ImgPlaceHolder,
        price: 500
    }
];

const Store = () => {
    return (
        <ItemListContainer greetings="Store" items={allItems} />
    )
}
export default Store
