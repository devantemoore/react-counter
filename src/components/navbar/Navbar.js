import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar navbar-light bg-light">
            <a href="/" className="navbar-brand">Counter</a>
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <a href="/" className="nav-link">Home</a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
