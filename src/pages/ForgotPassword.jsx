import React from 'react';
import Side from '../components/Side';
import logo from "../assets/ever15 1.png";
import { useNavigate } from 'react-router-dom';
import "../styles/login.scss";

function ForgotPassword() {

    const navigate = useNavigate();

    return (
        <div className='parent'>
            <Side />
            
            <main className='login-main'>
                <img src={logo} alt="logo" />

                <div className="header">
                    <h2>Reset password</h2>
                    <p>If you forgot your password, well, then we’ll email you instructions to reset your password.</p>
                </div>

                <form action="">
                    <div>
                        <p>Your email</p>
                        <input type="email" placeholder="jeffbrown@example.com" required />
                    </div> 

                    <button>Send reset instruction</button>
                    <p style={{
                        fontWeight: "700",
                        marginTop: "10px"
                    }} onClick={() => navigate("/login")}>Return to Login</p>
                </form>
            </main>
        </div>
    );
}

export default ForgotPassword;