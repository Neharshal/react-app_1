import React from "react";
import HeaderPage from "./headerPage";
import Footerpage from "./footerPage";


function LayouPage({ children }) {

    return (
        <>
            <HeaderPage />

            {children}
            <Footerpage />
        </>

    )
}

export default LayouPage;