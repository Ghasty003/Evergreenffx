import React, { useContext } from 'react';
import '../styles/settings.scss';
import puzzle from "../assets/oc-puzzle.svg";
import NavContext from '../context/NavContext';

function Settings({ addImg, btnColor, bg, shadow, cursor}) {

    const { showDetails } = useContext(NavContext);

    return (
        <div className='settings-parent'>
            <div>
                <div>
                    <h3>Trade Settings</h3>
                    <p>Fill in the form below correctly to connect your trading account to our AI powered system then sit back and enjoy the ride!.</p>
                </div>
                <button onClick={showDetails} style={{
                    color: btnColor,
                    background: bg,
                    boxShadow: shadow,
                    cursor: cursor
                }}><img src={addImg} alt="image" /> Add account</button>
            </div>
            <div>
                <img src={puzzle} alt="image" />
                <p>You haven't connected a trading account</p>
                <p>Click on <span>"Add account"</span> to proceed.</p>
            </div>
        </div>
    );
}

export default Settings;