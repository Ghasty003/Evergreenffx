import React from 'react';
import SideBar from '../components/SideBar';
import Topbar from '../components/Topbar';
import harvest from "../assets/oc-plane.svg";;

function Harvest() {
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
                <div className='history'>
                    <div>
                       <h3>All Harvest</h3>
                    </div>

                    <div>
                        <img src={harvest} alt="image" />
                        <p>Oops!</p>
                        <p>You haven't made any Harvest yet.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Harvest;