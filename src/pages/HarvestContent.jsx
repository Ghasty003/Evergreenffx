import React from 'react';
import "../styles/invoice-content.scss";
import SideBar from '../components/SideBar';
import Topbar from '../components/Topbar';
import search from '../assets/search-normal.png';

const Table = () => {

    return (
        <div className='table-parent'>
            <div className='invoice-search'>
                <h3>All Harvests</h3>
                <div>
                    <input type="text" placeholder='Search' />
                    <img src={search} alt="image" />
                </div>
            </div>

            <table>
                <tbody>
                    <tr>
                        <th>Wallet Adresss</th>
                        <th>Date</th>
                        <th>Amount</th>
                        <th>Status</th>
                    </tr>
                    <tr>
                        <td>0x4845cf4ed03c8...</td>
                        <td>15 May 2020 8:00 am</td>
                        <td>$202.87</td>
                        <td style={{
                            color: "#00C805",
                            fontWeight: 700
                        }}>Pending</td>
                    </tr>
                    <tr>
                        <td>0xc4448b77ac4a3...</td>
                        <td>15 May 2020 9:30 am</td>
                        <td>$293.01</td>
                        <td style={{
                            color: "#F2CC33",
                            fontWeight: 700
                        }}>Complete</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

function HarvestContent() {
    return (
        <div style={{
            display: "flex",
            width: "100%"
        }}>
            <SideBar />
            <div style={{
                width: "100%"
            }}>
                <Topbar title="Harvest" />
                <Table />
            </div>
        </div>
    );
}

export default HarvestContent;