import React from 'react';
import "../styles/invoice-view.scss";
import SideBar from '../components/SideBar';
import Topbar from '../components/Topbar';
import printer from "../assets/printer-dark.png";
import arrow from "../assets/backarrow.png";
import logo from '../assets/evergreeen-logo.png';
import call from "../assets/call.png";
import message from "../assets/message-2.png";

const Table = () => {
    return (
        <table className='view-table'>
            <tbody>
                <tr>
                    <th>Item ID</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Amount</th>
                </tr>

                <tr>
                    <td>50349</td>
                    <td>EvergreenFX Subscription</td>
                    <td>$375.00</td>
                    <td>1</td>
                    <td>$375.00</td>
                </tr>

                <tr>
                    <td>75849</td>
                    <td>EvergreenFX Subscription</td>
                    <td>$375.00</td>
                    <td>2</td>
                    <td>$$675.00</td>
                </tr>
            </tbody>
        </table>
    )
}

const BottomTable = () => {
    return (
        <table className='bottom-table'>
            <tbody>
                <tr>
                    <th>
                        <p>Subtotal</p>
                        <p>Discount (5%)</p>
                    </th>
                    <td>
                        <p>$7,125.00</p>
                        <p>$356.25</p>
                    </td>
                </tr>
                <tr>
                    <td>Total</td>
                    <td>$6,768.75</td>
                </tr>
            </tbody>
        </table>
    )
}

function InvoicesView() {
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
               <div className='view-container'>
                    <div className='view-header'>
                        <div>
                            <img style={{cursor: "pointer"}} src={arrow} alt="image" />
                            <h3>Invoice <span>#32597BND</span></h3>
                        </div>
                        <button><img src={printer} alt="image" /> Print</button>
                    </div>

                    <div className='view-content'>
                        <div className='view-content-header'>
                            <div>
                                <img src={logo} alt="" />
                                <h3>EvergreenFFX</h3>
                            </div>

                            <div>
                                <div>
                                    <p>Invoice ID</p>
                                    <p>Issue Date</p>
                                    <p>Status</p>
                                </div>

                                <div>
                                    <p>#32597BND</p>
                                    <p>Dec 29, 2022</p>
                                    <p>pending</p>
                                </div>
                            </div>
                        </div>

                        <div className='view-pay'>
                            <div>
                                <p>Bill To:</p>
                                <p>Omoraiyewa Samuel</p>
                                <div>
                                    <img src={message} alt="image" />
                                    <p>Omoraiyewa Samuel</p>
                                </div>
                                <div>
                                    <img src={call} alt="image" />
                                    <p>09079770757</p>
                                </div>
                            </div>
                            <div>
                                <p>Total Due:</p>
                                <p>$6,768.75</p>
                                <button>Pay</button>
                            </div>
                        </div>
                        <Table />
                        <BottomTable />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InvoicesView;