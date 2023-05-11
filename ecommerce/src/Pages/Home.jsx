import React from 'react'
import ItemListContainer from "../components/ItemListContainer";
import ImgPlaceHolder from '../images/gokuTest.jpg';

const hotItems = [
    {
        title: "Home",
        description: "Never love the source, for you cannot understand it.",
        image: ImgPlaceHolder
    },
    {
        title: "Home",
        description: "With chilis drink joghurt.",
        image: ImgPlaceHolder
    },
    {
        title: "Home",
        description: "God, dead fish. you won't mark the quarter-deck.",
        image: ImgPlaceHolder
    },
    {
        title: "Home",
        description: "Countless green people handle post-apocalyptic, neutral tribbles.",
        image: ImgPlaceHolder
    }
];

const Home = () => {
    return (
        <ItemListContainer greetings="Greetings" items={hotItems} />
    )
}
export default Home
