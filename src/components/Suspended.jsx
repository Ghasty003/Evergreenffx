import React from 'react';
import "../styles/suspended.scss";
import warn from "../assets/warn.png";
import hands from "../assets/oc-plugging-in.svg";

function Suspended() {
    return (
        <div className='suspended'>
            <div>
                <div>
                    <img src={warn} alt="image" />
                    <div>
                        <h3>Your trading account has been suspended.</h3>
                        <p>This is due to your defaulting of the 20% profit sharing of $20.8.
                            Check the invoice tab for more details.
                        </p>
                    </div>
                </div>
                <img src={hands} alt="image" />
                <div>
                    <button>Pay Now</button>
                </div>
            </div>
        </div>
    );
}

export default Suspended;