import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <a href="/" className="navbar-brand">Counter</a>
                <ul className="nav nav-pills mr-auto">
                    <li className="nav-item">
                        <a href="/" className="nav-link">Home</a>
                    </li>
                    <li className="nav-item">
                        <a href="/components" className="nav-link">Components</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
