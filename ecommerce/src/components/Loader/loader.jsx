import React from 'react'
import {CircularProgress} from "@mui/material";

const Loader = (props) => {

    const {showLoader} = props;

    return (
        <React.Fragment>
            { showLoader && <CircularProgress color="secondary" /> }
        </React.Fragment>
    )
}
export default Loader
