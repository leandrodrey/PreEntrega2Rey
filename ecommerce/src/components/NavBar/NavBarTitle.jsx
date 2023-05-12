import React from 'react'
import Typography from "@mui/material/Typography";

const NavBarTitle = (props) => {

    const logoImage = props.logoImage;
    const title = props.title;

    return (
        <React.Fragment>
            <img className="navbar__logo" alt={title} src={logoImage} />
            <Typography
                variant="h4"
                noWrap
                component="a"
                href="/"
                sx={{
                    mr: 2,
                    display: { xs: 'none', md: 'flex' },
                    fontFamily: 'monospace',
                    fontWeight: 800,
                    letterSpacing: '0',
                    color: 'inherit',
                    textDecoration: 'none',
                    size: '3rem',
                }}
            >
                {title}
            </Typography>
        </React.Fragment>
    )
}
export default NavBarTitle
