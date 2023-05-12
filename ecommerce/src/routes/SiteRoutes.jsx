import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from "../pages/Home";
import Store from "../pages/Store";
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";
import MainLayout from "./MainLayout";
import Error404 from "../pages/Error404";

const SiteRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<MainLayout/>}>
                    <Route index element={<Home/>} />
                    <Route path='/store' element={<Store/>} />
                    <Route path='/aboutus' element={<AboutUs/>} />
                    <Route path='/contactus' element={<ContactUs/>} />
                </Route>
                <Route path="*" element={<Error404/>} />
            </Routes>
        </BrowserRouter>
    )
}
export default SiteRoutes
