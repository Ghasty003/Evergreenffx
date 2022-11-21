import React, { useContext } from 'react';
import "../styles/sidebar.scss";
import logo from "../assets/logo-dark2x.png";
import img1 from "../assets/category-2.png";
import trade from "../assets/trade.png";
import refresh from "../assets/refresh.png";
import profile from "../assets/profile-2user.png";
import receipt from "../assets/receipt-text.png";
import money from "../assets/money-send.png";
import coin from '../assets/coin.png';
import logout from '../assets/logout.png';
import NavContext from '../context/NavContext';
import { FaTimes } from "react-icons/fa";

const Div = ({img, text}) => {
    return (
        <div className='side-div'>
            <img src={img} alt="image" />
            <p>{ text }</p>
        </div>
    )
}

function SideBar() {

    const {navRef, hideNav} = useContext(NavContext);

    return (
        <div ref={navRef} className='side-parent toggle'>
            <div>
                <img src={logo} alt="logo" />
                <FaTimes className='icon' onClick={hideNav} />
            </div>
            <Div img={img1} text="Dashboard" />
            <Div img={trade} text="Trade" />
            <Div img={refresh} text="History" />
            <Div img={profile} text="Referrals" />
            <Div img={receipt} text="Invoices" />
            <Div img={money} text="Harvest" />
            <Div img={coin} text="Bonuses" />
            <div className='line'></div>
            <div className='logout'>
                <img src={logout} alt="image" />
                <p>Logout</p>
            </div>
        </div>
    );
}

export default SideBar;