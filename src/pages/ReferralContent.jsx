import React, { useContext } from 'react';
import SideBar from '../components/SideBar';
import Topbar from "../components/Topbar";
import referralImg from '../assets/refferal-icon.png';
import NavContext from '../context/NavContext';

const CustomDiv = ({ text, number}) => {
    return (
        <div>
            <p>{ text }</p>
            <p>{ number }</p>
        </div>
    )
}

const Content = () => {
    return (
        <div className='content-parent'>
            <table>
                <tbody>
                    <tr>
                        <th>Fullname</th>
                        <th>Username</th>
                        <th>Amount</th>
                        <th>Payment Type</th>
                    </tr>
                    <tr>
                        <td>Agossou Semilinko</td>
                        <td>@acsy</td>
                        <td>$675.00</td>
                        <td>Profit Share</td>
                    </tr>
                    <tr>
                        <td>Marcel Apithy</td>
                        <td>@sleks</td>
                        <td>$1270.00</td>
                        <td>Profit Share</td>
                    </tr>
                    <tr>
                        <td>Emile Amoussou</td>
                        <td>@rubae</td>
                        <td>$3127.00</td>
                        <td>Subscription</td>
                    </tr>
                    <tr>
                        <td>Gabin Yarigo</td>
                        <td>@inner</td>
                        <td>$149.00</td>
                        <td>Subscription</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

const RequestWithdrawal = () => {
    
    const { withdrawal } = useContext(NavContext);

    return (
        <div ref={withdrawal} className='disable confirm withdraw'>
            <img src={referralImg} alt="image" />
            <div>
                <h2>Request Withdrawal</h2>
                <p>You do not have any withdrawal address on file, to add a withdrawal address or use the profile settings tab.</p>
            </div>
            <div>
                <button>Add a withdrawal address</button>
            </div>
        </div>
    )
}

function ReferralContent() {

    const { showWithdrawal } = useContext(NavContext);

    return (
        <div style={{
            display: "flex",
            width: "100%"
        }}>
            <SideBar />
            <div style={{
                width: "100%"
            }}>
                <Topbar title="Referrals" />
                <div className='referral-custom'>
                    <div>
                        <h2>Referrals Details</h2>
                        <button onClick={showWithdrawal} style={{
                            padding: "15px",
                            background: "#00C805",
                            boxShadow: "1.5px 1.5px #191919",
                            border: "none",
                            borderRadius: "5px",
                            cursor: "pointer"
                        }}>Withdraw</button>
                    </div>
                    <div>
                        <CustomDiv text="Total Referrals" number="1,156" />
                        <CustomDiv text="Amount earned" number="500k" />
                        <CustomDiv text="Amount withdrawn" number="367k" />
                    </div>
                </div>
                <Content />
                <RequestWithdrawal />
            </div>
        </div>
    );
}

export default ReferralContent;