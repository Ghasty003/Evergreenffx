import React from 'react';
import SideBar from '../components/SideBar';
import Topbar from '../components/Topbar';

function TradeContent() {
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
            </div>
        </div>
    );
}

export default TradeContent;