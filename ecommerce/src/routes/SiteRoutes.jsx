import React, {createContext} from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import MainLayout from "../components/MainLayout/MainLayout";
import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";
import ItemDetailPage from "../pages/ItemDetailPage";
import Error404 from "../pages/Error404";

const SiteRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<MainLayout/>}>
                    <Route index element={<Home/>} />
                    <Route path='/category/:categoryId' element={<Home/>} />
                    <Route path='/aboutus' element={<AboutUs/>} />
                    <Route path='/contactus' element={<ContactUs/>} />
                    <Route path='/item/:id' element={<ItemDetailPage/>} />
                </Route>
                <Route path="*" element={<Error404/>} />
            </Routes>
        </BrowserRouter>
    )
}
export default SiteRoutes
