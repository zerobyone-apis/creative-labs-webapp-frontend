import React from 'react'
import './Navbar.scss';

export function Navbar() {
    return (
        <nav className="navbar_container">
            <div className='logo_container'>
                <span className="logo_text">CREATIVE LABS</span>
            </div>
            <div className='navlink_container'>
                <ul className="nav_links">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Projects</a></li>
                    <li><a href="#">Products</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
        </nav>
    )
}
