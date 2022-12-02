import React from 'react';
import SideBar from '../components/SideBar';
import Topbar from '../components/Topbar';
import note from "../assets/oc-taking-note.svg";

function Invoices() {
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
                <div className='history'>
                    <div>
                       <h3>All Invoices</h3>
                    </div>

                    <div>
                        <img src={note} alt="image" />
                        <p>There is nothing to see here</p>
                        <p>You haven't generated an invoice.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Invoices;