import React, { useContext } from 'react';
import "../styles/topbar.scss";
import wallet from "../assets/wallet.png";
import pic from "../assets/Userpic.png";
import eye from "../assets/eye-slash.png";
import arrow from "../assets/Vector.png";
import { AiOutlineMenu } from "react-icons/ai";
import NavContext from '../context/NavContext';
import ProfileSettings from './ProfileSettings';
import ProfileBody from './ProfileBody';

function Topbar({ title }) {

    const {showNav, profileCon} = useContext(NavContext);

    const showProfile = () => {
        if (profileCon.current.classList.contains("profile-hide")) {
            profileCon.current.classList.remove("profile-hide");
        } else {
            profileCon.current.classList.add("profile-hide");
        }
    }

    return (
        <div className='top-parent'>
            <div className='menu'>
                <AiOutlineMenu className='icon' onClick={showNav} style={{
                    fontSize: "20px",
                    position: "relative",
                    top: "12px",
                    cursor: "pointer"
                }}/>
                <h2>{ title }</h2>
            </div>
            <div className='container'>
                <div className='wallet'>
                    <img src={wallet} alt="wallet" />
                    <div>
                        <p>Profit</p>
                        <h3>$500</h3>
                    </div>
                    <img src={eye} alt="image" />
                </div>
                <div className='user' onClick={showProfile}>
                    <img src={pic} alt="user image" />
                    <div>
                        <p>Verified</p>
                        <h3>Samuel</h3>
                    </div>
                    <img src={arrow} alt="vector" />
                </div>
            </div>
            <ProfileSettings />
            <ProfileBody />
        </div>
    );
}

export default Topbar;