import React from 'react';
import logo from "../assets/logo-dark2x.png";

function Logo() {
    return (
        <div>
            <img src={logo} alt="logo" />
                <div className="container">
                    <div className="circle circle-one">1</div>
                    <div className="dash"></div>
                    <div className="circle circle-two">2</div>
                    <div className="dash dash-two"></div>
                    <div className="circle circle-three">3</div>
                </div>
        </div>
    );
}

export default Logo;