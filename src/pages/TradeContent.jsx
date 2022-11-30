import React from 'react';
import SideBar from '../components/SideBar';
import Topbar from '../components/Topbar';
import "../styles/trade-content.scss";
import deleteImg from "../assets/delete.png";

const Table = () => {
    return (
        <div className='table-parent'>
            <div>
                <h3>Trade Settings</h3>
                <p>Fill in the form below correctly to connect your trading account to our AI powered system then sit back and enjoy the ride!.</p>
            </div>

            <table>
                <tbody>
                    <tr>
                        <th>Acound ID</th>
                        <th>Broker</th>
                        <th>Added On</th>
                        <th>Login State</th>
                        <th>Action</th>
                    </tr>
                    <tr>
                        <td>75849</td>
                        <td>MT4</td>
                        <td>15 May 2022 8:00 am</td>
                        <td style={{
                            color: "#00C805",
                            fontWeight: 700
                        }}>Connected</td>
                        <td>
                            <label class="switch">
                                <input type="checkbox" />
                                <span class="slider"></span>
                            </label>
                            <img src={deleteImg} alt="image" />
                        </td>
                    </tr>
                    <tr>
                        <td>75849</td>
                        <td>MT4</td>
                        <td>15 May 2022 8:00 am</td>
                        <td style={{
                            color: "#E74F48",
                            fontWeight: 700
                        }}>Disconnected</td>
                        <td>
                            <label class="switch">
                                <input type="checkbox" disabled />
                                <span class="slider"></span>
                            </label>
                            <img src={deleteImg} alt="image" />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

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
                <Table />
            </div>
        </div>
    );
}

export default TradeContent;