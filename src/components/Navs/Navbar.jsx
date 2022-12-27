import React from 'react';

const Navbar = () => {
    const handleToggle = (e) => {
        let nav = document.querySelector("#navbar")
        let toggle = document.querySelector(".mobile-nav-toggle")
        console.log(toggle);
        nav.classList.toggle("bi-list")
        nav.classList.toggle("navbar-mobile")
        toggle.classList.toggle("bi-x")
    }


    return (
        <nav id="navbar" className="navbar">
            <ul>
                <li><a className="nav-link scrollto active" href="#hero">خانه</a></li>
                <li><a className="nav-link scrollto" href="#about">درباره من</a></li>
                {/* <li><a className="nav-link scrollto" href="#services">خدمات</a></li> */}
                {/* <li><a className="nav-link scrollto " href="#work">نمونه کار ها</a></li> */}
                {/* <li><a className="nav-link scrollto " href="#blog">Blog</a></li> */}
                <li><a className="nav-link scrollto" href="#contact">ارتباط با من </a></li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle" onClick={handleToggle}></i>
        </nav>

    );
}

export default Navbar;
