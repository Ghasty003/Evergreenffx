import React from 'react';
import SideBar from '../components/SideBar';
import Topbar from "../components/Topbar";
import Subscription from '../components/Subscription';
import Settings from '../components/Settings';
import add from "../assets/add.png";

function Trade() {
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
                <Subscription />
                <Settings addImg={add} />
            </div>
        </div>
    );
}

export default Trade;