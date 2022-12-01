import React from 'react';
import Position from '../components/Position';
import SideBar from '../components/SideBar';
import Subscription from '../components/Subscription';
import Topbar from '../components/Topbar';
import "../styles/dashboard.scss";

function Dashboard() {
    return (
        <div style={{
            display: "flex",
            width: "100%"
        }}>
            <SideBar />
            <div style={{
                width: "100%"
            }}>
                <Topbar title="Dashboard" />
                <Subscription />
                <Position text="open" head="Open" />
                <Position text="closed" head="Closed" />
            </div>
        </div>
    );
}

export default Dashboard;