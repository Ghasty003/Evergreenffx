import React, { useEffect, useState } from 'react';
import "../styles/invoice-content.scss";
import SideBar from '../components/SideBar';
import Topbar from '../components/Topbar';
import img from "../assets/printer.png";
import search from '../assets/search-normal.png';

const Table = () => {

    const [width, setWidth] = useState(false);

    useEffect(() => {
        window.addEventListener("load", () => {
            if (window.innerWidth <= 400) {
                setWidth(true);
            } else {
                setWidth(false);
            }
        });

        window.addEventListener("resize", () => {
            if (window.innerWidth <= 400) {
                setWidth(true);
            } else {
                setWidth(false);
            }
        });
    }, [width]);

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
                        <td>{ width ? "1/7/22" : "15 May 2022 8:00 am"}</td>
                        <td>$202.87</td>
                        <td style={{
                            color: "#00C805",
                            fontWeight: 700
                        }}>Complete</td>
                        <td>
                            <div className='invoice-btn'>
                                <img src={img} alt="image" />
                                <button>View</button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>75849</td>
                        <td>{ width ? "1/7/22" : "15 May 2022 8:00 am"}</td>
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