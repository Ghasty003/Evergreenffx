import React, { useContext } from 'react';
import "../styles/sidebar.scss";
import logo from "../assets/evergreeen-logo.png";
import img1 from "../assets/category-2.png";
import dashboardDark from "../assets/dashboard-dark.png";
import trade from "../assets/trade.png";
import tradeDark from "../assets/trade-dark.png";
import refresh from "../assets/refresh.png";
import refreshDark from "../assets/clock.png";
import profile from "../assets/profile-2user.png";
import profileDark from "../assets/people.png";
import receipt from "../assets/receipt-text.png";
import money from "../assets/money-send.png";
import coin from '../assets/coin.png';
import coinDark from "../assets/coin-dark.png";
import logout from '../assets/logout.png';
import NavContext from '../context/NavContext';
import { FaTimes } from "react-icons/fa";
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

const Div = ({img, imgd, text, to}) => {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({path: resolvedPath.pathname, end: true});
    return (
        <div className={isActive ? "active" : ""}>
            <Link to={to} className='side-div'>
                <img src={isActive? imgd : img} alt="image" />
                <p>{ text }</p>
            </Link>
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
            <Div to="/dashboard" imgd={dashboardDark} img={img1} text="Dashboard" />
            <Div to="/trade" img={trade} imgd={tradeDark} text="Trade" />
            <Div to="/history" img={refresh} imgd={refreshDark} text="History" />
            <Div to="/referrals" img={profile} imgd={profileDark} text="Referrals" />
            <Div to="/bonuses" img={coin} imgd={coinDark} text="Bonuses" />
            <Div to="/invoices" img={receipt} text="Invoices" />
            <Div to="/harvest" img={money} text="Harvest" />
            <div className='line'></div>
            <div className='logout'>
                <img src={logout} alt="image" />
                <p>Logout</p>
            </div>
        </div>
    );
}

export default SideBar;