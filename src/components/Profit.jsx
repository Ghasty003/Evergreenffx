import React from 'react';
import "../styles/profit.scss";
import img from "../assets/warning.png";

function Profit() {
    return (
        <div className='profit'>
            <div>
                <img src={img} alt="image" />
                <div>
                    <h3>Your profit sharing of 20% is due, click to pay.</h3>
                    <p style={{
                        marginTop: "5px"
                    }}>You have <span style={{
                        fontWeight: "bold",
                    }}>3d 20hr 15m 10s</span> to make payment.</p>
                    <p>Check the invoice tab for more details.</p>
                </div>
            </div>
            <div>
                <button>Pay Now</button>
            </div>
        </div>
    );
}

export default Profit;