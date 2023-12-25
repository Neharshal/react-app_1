import React from "react";
import HeaderPage from "./headerPage";
import Footerpage from "./footerPage";


function LayoutPage({ children }) {

    return (
        <>
            <HeaderPage />
             {children}
            <Footerpage />
        </>

    );
}

export default LayoutPage;