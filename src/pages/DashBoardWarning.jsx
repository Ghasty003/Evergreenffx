import React from 'react';
import "../styles/dashboard.scss";
import Position from '../components/Position';
import Profit from '../components/Profit';
import SideBar from '../components/SideBar';
import Topbar from '../components/Topbar';


function DashBoardWarning() {
    
    return (
        <div style={{
            display: "flex",
            width: "100%"
        }}>
            <SideBar />
            <div style={{
                width: "100%"
            }}>
                <Topbar />
                <Profit />
                <Position text="open" head="Open" />
                <Position text="closed" head="Closed" />
            </div>
        </div>
    );
}

export default DashBoardWarning;