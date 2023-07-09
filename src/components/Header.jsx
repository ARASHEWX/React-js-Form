import React from 'react';
import "./Header.css"
const Header = () => {
    return (
        <>
            <header>
                <h2 className="logo">Arash Salami</h2>
                <nav className="navigation">
                    <a href="#">Home</a>
                    <a href="#">Aboute</a>
                    <a href="#">Services</a>
                </nav>
            </header>
        </>
    );
};

export default Header;