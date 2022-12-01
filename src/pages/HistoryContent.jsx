import React from 'react';
import SideBar from '../components/SideBar';
import Topbar from '../components/Topbar';
import "../styles/history-content.scss";

const Content = () => {
    return (
        <div className='history-content'>
            <h3>Trade History</h3>
            <p>View the records of trades EvergreenFFX AI has placed on your trading account!.</p>
            <table>
                <tbody>
                    <tr>
                        <th>Account ID</th>
                        <th>Side</th>
                        <th>Symbol</th>
                        <th>Position</th>
                        <th>Time</th>
                    </tr>
                    <tr>
                        <td>49503</td>
                        <td style={{
                            color: "#00C805"
                        }}>Buy</td>
                        <td>USD/EUR</td>
                        <td>Closed</td>
                        <td>15 May 2022 8:30 am</td>
                    </tr>
                    <tr>
                        <td>95884</td>
                        <td style={{
                            color: "#E74F48"
                        }}>Sell</td>
                        <td>USD/EUR</td>
                        <td>Open</td>
                        <td>15 May 2022 9:30 am</td>
                    </tr>
                    <tr>
                        <td>32345</td>
                        <td style={{
                            color: "#E74F48"
                        }}>Sell</td>
                        <td>USD/EUR</td>
                        <td>Closed</td>
                        <td>15 May 2022 9:00 am</td>
                    </tr>
                    <tr>
                        <td>58339</td>
                        <td style={{
                            color: "#00C805"
                        }}>Buy</td>
                        <td>USD/EUR</td>
                        <td>Open</td>
                        <td>15 May 2022 8:00 am</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

function HistoryContent() {
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
                <Content />
            </div>
        </div>
    );
}

export default HistoryContent;