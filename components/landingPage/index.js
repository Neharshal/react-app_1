import React from "react";

import HeaderPage from "../Layout/headerPage";
import TopSection from "./topSection";

function LandingPage() {
    return (
        <HeaderPage title={HEAD_TITLES.home}>

            <main>
                <TopSection />
            </main>
        </HeaderPage>
    )
}
export default LandingPage;