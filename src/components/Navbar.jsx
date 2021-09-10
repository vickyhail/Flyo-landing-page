import React from 'react';
import logo from '../images/images/logo.svg';

function Navbar() {
    return (
        <div className="navbar">
            <img className="img" src={logo} alt="logo"/>
            <div className="navicons">
                <ul>
                    <li>Features</li>
                    <li>Team</li>
                    <li> Sign In</li>
             </ul>
            </div>
            
        </div>
    )
}

export default Navbar
