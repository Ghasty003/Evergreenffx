import React from 'react';
import Side from '../components/Side';
import "../styles/verify.scss";
import Logo from "../components/Logo";
import { useNavigate } from 'react-router-dom';

function Verify() {

    const navigate = useNavigate();

    return (
        <div className='parent'>
            <Side />
            <main className='verify-main'>
            
                <Logo />

                <div className="main-content">
                    <div>
                        <h2>Verify OTP</h2>
                        <p>Input the OTP sent to samuelomorayewa17@gmail.com</p>
                    </div>

                    <form action="" onSubmit={(e) => {
                        e.preventDefault();
                        navigate("/signup")
                    }}>
                        <div className="otp">
                            <input type="text" required />
                            <input type="text" required />
                            <input type="text" required />
                            <input type="text" required />
                            <input type="text" required />
                            <input type="text" required />
                        </div>
                        <button>Verify</button>
                    </form>
                </div>
            </main>
        </div>
    );
}

export default Verify;