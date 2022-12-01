import React from 'react';
import SideBar from '../components/SideBar';
import Topbar from '../components/Topbar';
import hand from "../assets/hand-paper.svg";
import "../styles/history.scss";

function History() {
    return (
        <div style={{
            display: "flex",
            width: "100%"
        }}>
            <SideBar />
            <div style={{
                width: "100%"
            }}>
                <Topbar title="History" />
                <div className='history'>
                    <div>
                        <h3>Trade History</h3>
                        <p>View the records of trades EvergreenFFX AI has placed on your trading account!.</p>
                    </div>

                    <div>
                        <img src={hand} alt="image" />
                        <p>There is nothing to see here</p>
                        <p>You haven't made any transaction.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default History;