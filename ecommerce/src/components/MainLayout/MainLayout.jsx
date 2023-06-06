import React from 'react'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import {Outlet} from 'react-router-dom';
import {StyledEngineProvider, ThemeProvider, createTheme} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Container from "@mui/material/Container";
import imgLogo from '../NavBar/images/logo.png';
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

const siteTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            light: '#757ce8',
            main: '#3f50b5',
            dark: '#002884',
            contrastText: '#FFFFFF',
        },
        secondary: {
            light: '#ff7961',
            main: '#f44336',
            dark: '#ba000d',
            contrastText: '#000000',
        }
    }
});

const siteInfo = {
    "name": "Overlord Store",
    "logo": [imgLogo]
};

const menuItems = [
    {
        name: 'Home',
        path: '/'
    },
    {
        name: 'Seinen',
        path: '/category/1'
    },
    {
        name: 'Isekai',
        path: '/category/2'
    }
];

const MainLayout = () => {

    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={siteTheme}>
                <CssBaseline />
                <header>
                    <NavBar
                        title={siteInfo.name}
                        logo={siteInfo.logo}
                        menuItems={menuItems}
                    />
                </header>
                <Container maxWidth="xl">
                    <Outlet />
                </Container>
                <Footer />
            </ThemeProvider>
        </StyledEngineProvider>
    )

}
export default MainLayout
