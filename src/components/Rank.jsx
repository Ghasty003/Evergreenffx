import React from 'react';
import "../styles/rank.scss";
import img from "../assets/oc-hi-five.svg";

function Rank() {

    return (
        <div className='sub-parent rank'>
            <div>
                <div>
                    <h3>Current Rank: <span>Leader</span></h3>
                    <div>
                       <progress max="100" value="20"></progress>
                       <p>20%</p>
                    </div>
                    <p>You have 20 more referals to complete this level.</p>
                </div>
                <div>
                    <img src={img} alt="image" />
                </div>
            </div>
        </div>
    );
}

export default Rank;