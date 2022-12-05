import React from 'react';
import "../styles/subscription.scss";
import hands from "../assets/oc-plugging-in-dark.svg";

function Subscription() {
    return (
        <div className='sub-parent'>
            <div>
                <div>
                    <h3>Your subscription is inactive</h3>
                    <p>You can check your invoices tab for more details or click to subscribe.</p>
                    <button>Subscribe</button>
                </div>
                <div>
                    <img src={hands} alt="image" />
                </div>
            </div>
        </div>
    );
}

export default Subscription;