import React from "react";
import './error-indicator.css';
import icon from './death star.png';

const ErrorIndicator = () => {
    return (
        <div className="error-indicator">
            <img src={icon} alt='error-icon'></img><br/>
            <span className="boom">BOOM!</span><br/>
            <span>Something went wrong</span><br/>
            <span>We already sent droids to fix it!</span>
        </div>
    )
}

export default ErrorIndicator;