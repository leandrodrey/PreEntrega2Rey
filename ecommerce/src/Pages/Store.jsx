import React from 'react'
import ItemListContainer from "../components/ItemListContainer";
import ImgPlaceHolder from "../images/gokuTest.jpg";

const allItems = [
    {
        title: "Store",
        description: "Never love the source, for you cannot understand it.",
        image: ImgPlaceHolder
    },
    {
        title: "Store",
        description: "With chilis drink joghurt.",
        image: ImgPlaceHolder
    },
    {
        title: "Store",
        description: "God, dead fish. you won't mark the quarter-deck.",
        image: ImgPlaceHolder
    },
    {
        title: "Store",
        description: "Countless green people handle post-apocalyptic, neutral tribbles.",
        image: ImgPlaceHolder
    }
];

const Store = () => {
    return (
        <ItemListContainer greetings="Store" items={allItems} />
    )
}
export default Store
