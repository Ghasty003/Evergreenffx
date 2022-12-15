import React from 'react';
import SideBar from '../components/SideBar';
import Topbar from "../components/Topbar";
import "../styles/referrals.scss";
import people from "../assets/oc-hi-five.svg";

const CustomDiv = ({ text, number }) => {
    return (
        <div className="hal-ref">
            <p>{ text }</p>
            <p>{ number }</p>
        </div>
    )
}

function Referrals() {
    return (
        <div style={{
            display: "flex",
            width: "100%"
        }}>
            <SideBar />
            <div style={{
                width: "100%"
            }}>
                <Topbar title="Referrals" />
                <div className='referral-custom'>
                    <h2>Referrals Details</h2>
                    <div>
                        <CustomDiv text="Total Referrals" number="0" />
                        <CustomDiv text="Amount earned" number="0" />
                        <CustomDiv text="Amount withdrawn" number="0" />
                    </div>
                </div>
                <div className='referral-people'>
                    <img src={people} alt="image" />
                    <p>Oops!</p>
                    <p>You haven’t referred anyone yet!</p>
                </div>
            </div>
        </div>
    );
}

export default Referrals;