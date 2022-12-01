import React from 'react';
import SideBar from '../components/SideBar';
import Topbar from "../components/Topbar";
import Settings from '../components/Settings';
import add from "../assets/add-dark.png";
import AddAccount from '../components/AddAccount';

function TradeSubscribed() {
    return (
        <div style={{
            display: "flex",
            width: "100%"
        }}>
            <SideBar />
            <div style={{
                width: "100%"
            }}>
                <Topbar title="Trade" />
                <Settings addImg={add} btnColor=" #191919" bg="#00C805" shadow="2px 2px black" />
                <AddAccount />
            </div>
        </div>
    );
}

export default TradeSubscribed;