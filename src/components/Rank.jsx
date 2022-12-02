import React, { useContext } from 'react';
import NavContext from '../context/NavContext';
import "../styles/rank.scss";
import megaphone from "../assets/oc-megaphone.svg";

function Rank() {

    const {img} = useContext(NavContext);

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
                    <img className={`${img === megaphone ? "img" : ""}`} src={img} alt="image" />
                </div>
            </div>
        </div>
    );
}

export default Rank;