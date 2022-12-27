import React from 'react';
import Navbar from '../Navs/Navbar';

const Header = () => {
    return (
        <header id="header" className="fixed-top">
            <div className="container d-flex align-items-center justify-content-between">


                <Navbar />
                <h1 className="logo"><a href="index.html">DevFolio</a></h1>
            </div>
        </header>
    );
}

export default Header;
