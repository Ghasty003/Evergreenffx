import React, { useRef, useState } from 'react';
import Side from '../components/Side';
import logo from "../assets/logo-dark2x.png";
import { Link } from 'react-router-dom';
import { IoEyeOutline } from "react-icons/io5";
import { FiEyeOff } from "react-icons/fi";
import "../styles/login.scss";

function Login() {

    const [seePass, setSeePass] = useState(false);
    const passwordInput = useRef("");

    const seePassword = () => {
        setSeePass(true);
        passwordInput.current.type = "text";
    }

    const hidePassword = () => {
        setSeePass(false);
        passwordInput.current.type = "password";
    }

    return (
        <div className='parent'>
            <Side />
            
        <main className='login-main'>
            <img src={logo} alt="logo" />

            <div className="header">
                <h2>Login</h2>
                <p>Access your dashboard using your email and passcode</p>
            </div>

            <form action="">
                <div>
                    <p>Your email</p>
                    <input type="email" placeholder="jeffbrown@example.com" required />
                </div>

                <div className="password">
                    <p>Password</p>
                    <input type="password" className="pass" ref={passwordInput} required />
                    <i>
                        { seePass ? <FiEyeOff className='see-pass' onClick={hidePassword} />
                            : <IoEyeOutline className='see-pass' onClick={seePassword} />
                        }
                    </i>
                    </div>
                <p>Forgot Password</p>

                <Link to="/dashboard"><button>Login</button></Link>

                <div className="last-content">
                    <p>New on our platform?</p>
                    <Link to="/" style={{textDecoration: "none", color: "#00C805", 
                    fontFamily: "DM Sans",
                    fontWeight: "700"
                }}>Create an account</Link>
                </div>
            </form>
        </main>
        </div>
    );
}

export default Login;