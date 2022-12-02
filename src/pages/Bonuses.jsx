import React, { useContext, useRef, useState } from 'react';
import SideBar from '../components/SideBar';
import Topbar from "../components/Topbar";
import Rank from "../components/Rank";
import "../styles/bonuses.scss";
import NavContext from '../context/NavContext';

const CustomDiv = ({ text, number}) => {
    return (
        <div>
            <p>{ text }</p>
            <p>{ number }</p>
        </div>
    )
}

const Ranking = () => {
    return (
        <table className='ranking'>
            <tbody>
                <tr>
                    <th>Rank</th>
                    <th>Progress</th>
                    <th>Amount</th>
                    <th>Action</th>
                </tr>
                <tr>
                    <td>LEADER</td>
                    <td>0%</td>
                    <td>$100</td>
                    <td>
                        <button>Withdraw</button>
                    </td>
                </tr>
                <tr>
                    <td>BUSINESS BUILDER</td>
                    <td>0%</td>
                    <td>$500</td>
                    <td>
                        <button>Withdraw</button>
                    </td>
                </tr>
                <tr>
                    <td>SAPPHIRE EXECUTIVE</td>
                    <td>0%</td>
                    <td>$1,000</td>
                    <td>
                        <button>Withdraw</button>
                    </td>
                </tr>
                <tr>
                    <td>SAPPHIRE DIRECTOR</td>
                    <td>0%</td>
                    <td>$1,000</td>
                    <td>
                        <button>Withdraw</button>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}

const FirstLevel = () => {
    return (
        <div className='content-parent'>
        <table>
            <tbody>
                <tr>
                    <th>Fullname</th>
                    <th>Username</th>
                    <th>Staus</th>
                    <th>No. of Referrals</th>
                </tr>
                <tr>
                    <td>Agossou Semilinko</td>
                    <td>@acsy</td>
                    <td>Active</td>
                    <td>0</td>
                </tr>
                <tr>
                    <td>Marcel Apithy</td>
                    <td>@sleks</td>
                    <td>Inactive</td>
                    <td>21</td>
                </tr>
                <tr>
                    <td>Emile Amoussou</td>
                    <td>@rubae</td>
                    <td>Active</td>
                    <td>5</td>
                </tr>
                <tr>
                    <td>Gabin Yarigo</td>
                    <td>@inner</td>
                    <td>Inactive</td>
                    <td>10</td>
                </tr>
            </tbody>
        </table>
    </div>
    )
}

const Content = () => {

    const [render, setRender] = useState(<Ranking />);

    const { setToPeople, setToMegaphone } = useContext(NavContext);

    const ranking = useRef("");
    const first = useRef("");
    const second = useRef("");
    const third = useRef("");

    return (
        <div className='history-content bonuses-parent'>
            
            <div className='bonuses-header'>
                <p ref={ranking} className='active' onClick={() => {
                    if (!ranking.current.classList.contains("active")) {
                        ranking.current.classList.add("active");
                        first.current.classList.remove("active");
                        second.current.classList.remove("active");
                        third.current.classList.remove("active");
                        setRender(<Ranking />);
                        setToPeople();
                    }
                }}>Ranking</p>
                <p onClick={() => {
                    if (!first.current.classList.contains("active")) {
                        first.current.classList.add("active");
                        ranking.current.classList.remove("active");
                        second.current.classList.remove("active");
                        third.current.classList.remove("active");
                        setRender(<FirstLevel />)
                        setToMegaphone();
                    }
                }} ref={first}>1st Level</p>
                <p  onClick={() => {
                    if (!second.current.classList.contains("active")) {
                        second.current.classList.add("active");
                        ranking.current.classList.remove("active");
                        first.current.classList.remove("active");
                        third.current.classList.remove("active");
                        setRender(<FirstLevel />)
                    }
                }} ref={second}>2nd Level</p>
                <p  onClick={() => {
                    if (!third.current.classList.contains("active")) {
                        third.current.classList.add("active");
                        ranking.current.classList.remove("active");
                        second.current.classList.remove("active");
                        first.current.classList.remove("active");
                        setRender(<FirstLevel />)
                    }
                }} ref={third}>3rd Level</p>
            </div>

            {render}
            
        </div>
    )
}

function Bonuses() {
    return (
        <div style={{
            display: "flex",
            width: "100%"
        }}>
            <SideBar />
            <div style={{
                width: "100%"
            }}>
                <Topbar title="Bonuses" />
                <Rank />
                <div className='referral-custom'>
                    <h2>Earnings</h2>
                    <div>
                        <CustomDiv text="Total Referrals" number="1,156" />
                        <CustomDiv text="First Level" number="100" />
                        <CustomDiv text="Second Level" number="36" />
                        <CustomDiv text="Third Level" number="7" />
                    </div>
                </div>
                <Content />
            </div>
        </div>
    );
}

export default Bonuses;