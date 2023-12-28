import React from "react";
import FooterPage from "../Layout/footerPage";
// import FooterPage from "./footerPage";

function NoAuthLayout({ children }) {
  return (
    <>
      {children}
      <FooterPage />
    </>
  );
}

export default NoAuthLayout;
