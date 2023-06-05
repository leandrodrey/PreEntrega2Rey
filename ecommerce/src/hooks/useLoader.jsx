import React, {useEffect, useState} from 'react'

const UseLoader = () => {

    const [showLoader, setShowLoader] = useState(true);

    const startLoader = () => setShowLoader(true);

    const stopLoader = () => setShowLoader(false);

    useEffect(() => {
        return () => setShowLoader(false);
    }, []);

    return {
        showLoader,
        startLoader,
        stopLoader
    }
}
export default UseLoader
