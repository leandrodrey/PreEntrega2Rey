import React from 'react'
import ItemListContainer from "../components/ItemListContainer";

const siteInfo = {
    "greetingsMessage": "Greetings"
};
const Home = () => {
    return (
        <ItemListContainer greetings={siteInfo.greetingsMessage} />
    )
}
export default Home
