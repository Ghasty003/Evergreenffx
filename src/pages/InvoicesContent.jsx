import React from 'react';
import "../styles/invoice-content.scss";
import SideBar from '../components/SideBar';
import Topbar from '../components/Topbar';
import img from "../assets/printer.png";
import search from '../assets/search-normal.png';

const Table = () => {

    return (
        <div className='table-parent'>
            <div className='invoice-search'>
                <h3>All Invoices</h3>
                <div>
                    <input type="text" placeholder='Search by Invoice ID' />
                    <img src={search} alt="image" />
                </div>
            </div>

            <table>
                <tbody>
                    <tr>
                        <th>Invoice ID</th>
                        <th>Date</th>
                        <th>Amount</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                    <tr>
                        <td>75849</td>
                        <td>15 May 2020 8:00 am</td>
                        <td>$202.87</td>
                        <td style={{
                            color: "#00C805",
                            fontWeight: 700
                        }}>Connected</td>
                        <td>
                            <div className='invoice-btn'>
                                <img src={img} alt="image" />
                                <button>View</button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>75849</td>
                        <td>15 May 2020 9:30 am</td>
                        <td>$293.01</td>
                        <td style={{
                            color: "#F2CC33",
                            fontWeight: 700
                        }}>Pending</td>
                        <td>
                            <div className='invoice-btn'>
                                <img src={img} alt="image" />
                                <button>View</button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

function InvoicesContent() {
    return (
        <div style={{
            display: "flex",
            width: "100%"
        }}>
            <SideBar />
            <div style={{
                width: "100%"
            }}>
                <Topbar title="Invoices" />
                <Table />
            </div>
        </div>
    );
}

export default InvoicesContent;