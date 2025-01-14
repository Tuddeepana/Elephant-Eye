import React from 'react';
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";

const Layout = ({ children }) => {
    return (
        <div className="">
            <Navbar />
            {children}
            <Footer />
        </div>
    );
}

export default Layout;