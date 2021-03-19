import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const Layout = ({ children, mainClass }) => {
  return (
    <div className={`content-area ${mainClass || ""}`}>
      <div className="main-page">
        <Header />
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
