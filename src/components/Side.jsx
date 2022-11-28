import React from 'react';
import illustration from "../assets/Illustration.png";
import "../styles/side.scss";


function Side() {
    return (
        <div className="side">
            <img src={illustration} alt="Illustration" />
            <h2>Smart Trading Technology</h2>
            <p>EvergreenFFx intelligent bot eliminates all the stress and hassle of traditional forex
                forex trading
            </p>
        </div>
    );
}

export default Side;