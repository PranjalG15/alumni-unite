 import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../static/images/logo.png";
//import {connect} from 'react-redux';
const Header = () => {
    return (
        <div >
            <header className="header flex-row">
                <div className="logo-container">
                    <img className='logo' src={logo}></img>
                </div>

                <div className="nav">

                    <ul className="nav ul flex-row">
                        <li className="nav-li"> <a href="#"> Resume Templates</a></li>
                        <li className="nav-li"> <a href="#"> About Us</a></li>
                        <li className="nav-li"> <a href="#"> <button className="btn white">Register </button></a></li>
                        <li className="nav-li"> <a href="#"> Sign In</a></li>
                    </ul>
                </div>
            </header>
        </div>
    );
};


export default Header;