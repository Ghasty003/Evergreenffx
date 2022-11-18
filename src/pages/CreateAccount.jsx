import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../components/Logo';
import Side from '../components/Side';
import '../styles/createaccount.scss';

function CreateAccount() {

    const navigate = useNavigate();

    return (
        <div className='parent'>
            <Side />
            <main className='create-main'>
                <Logo />
                <div className="main-content">
                    <h2>Create account</h2>
                    <p>We’ll send an OTP to verify your email</p>
                </div>

                <form action="" onSubmit={(e) => {
                    e.preventDefault();
                    navigate("/verify")
                }}>
                    <div className="create-email">
                        <p>Your email</p>
                        <input type="email" placeholder="jeff.brown@example.com" required />
                    </div>

                    <div className="create-container">
                        <input type="checkbox" required />
                        <div>
                            <p>I agree to EvergreenFX</p>
                            <p>Privacy Policy </p> & 
                            <p> Terms.</p>
                        </div>
                    </div>

                    <button>Proceed</button>
                </form>

                <div className="ask">
                    <p>Already Have an Account?</p>
                    <Link style={{textDecoration: "none", color: "#00855D"}} to="/login">Login</Link>
                </div>
            </main>
        </div>
    );
}

export default CreateAccount;