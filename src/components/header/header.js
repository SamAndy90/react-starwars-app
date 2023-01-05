import React, { Component } from "react";
import { Link } from "react-router-dom";
import './header.css';

const Header = ({ onServiceChange }) => {
    return (
        <div className="header d-flex">
            <h3>
                <Link to="/">Star DB</Link>
            </h3>
            <ul className="d-flex">
                <li>
                    <Link to="/people/">People</Link>
                </li>
                <li>
                    <Link to="/planets/">Planets</Link>
                </li>
                <li>
                    <Link to="/starships/">Starships</Link>
                </li>
            </ul >
            <button onClick={onServiceChange}
                className="btn btn-primary btn-small" >
                Change Context
            </button>
        </div >
    );
};

export default Header;