import React from 'react';
import Position from '../components/Position';
import SideBar from '../components/SideBar';
import Suspended from '../components/Suspended';
import Topbar from '../components/Topbar';
import "../styles/dashboard.scss";

function DashboardSuspended() {
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
                <Suspended />
                <Position text="closed" head="Closed" />
            </div>
        </div>
    );
}

export default DashboardSuspended;