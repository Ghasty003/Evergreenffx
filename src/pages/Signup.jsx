import React, { useRef, useState } from 'react';
import Side from '../components/Side';
import "../styles/signup.scss";
import { IoEyeOutline } from "react-icons/io5";
import { FiEyeOff } from "react-icons/fi"
import Logo from '../components/Logo';
import { useNavigate } from 'react-router-dom';

function Signup() {

    const [seePass, setSeePass] = useState(false);
    const passwordInput = useRef("");
    const strength = useRef("");
    const div1 = useRef("");
    const div2 = useRef("");
    const div3 = useRef("");

    const seePassword = () => {
        setSeePass(true);
        passwordInput.current.type = "text";
    }

    const hidePassword = () => {
        setSeePass(false);
        passwordInput.current.type = "password";
    }

    const handleInput = (e) => {
        if( e.target.value.length >= 8 ) {
            strength.current.innerHTML = "OK"
            div1.current.style.background = "#2B9978"
        } else {
            div1.current.style.background = "#D1D1D1";
            if (strength.current.innerHTML == "OK") {
                strength.current.innerHTML = "";
            }
        }
        if (e.target.value.length >= 8 && /[0-9]/.test(e.target.value)) {
            strength.current.innerHTML = "Good";
            div2.current.style.background = "#2B9978";
        } else {
            div2.current.style.background = "#D1D1D1";
            if (strength.current.innerHTML == "Good") {
                strength.current.innerHTML = "OK";
            }
        }
        if(e.target.value.length >= 8 && /[0-9]/.test(e.target.value) && /[^a-zA-Z0-9]/.test(e.target.value)) {
            strength.current.innerHTML = "Strong";
            div3.current.style.background = "#2B9978";
        } else {
            div3.current.style.background = "#D1D1D1";
            if (strength.current.innerHTML == "Strong") {
                strength.current.innerHTML = "Good";
            }
        }
    }

    const navigate = useNavigate()

    function handleSubmit() {
        navigate("/dashboard")
    }

    return (
        <div className='parent'>

            <Side />

            <main className='signup-main'>
                
                <Logo />

                <div className="header">
                    <h2>Personal Details</h2>
                    <p>Please fill your personal details below </p>
                </div>

                <form action="" onSubmit={handleSubmit}>
                    <div>
                        <p>Your name</p>
                        <input type="text" placeholder="jeff brown" required />
                    </div>

                    <div>
                        <p>Username</p>
                        <input type="text" placeholder="jeff brown" required />
                    </div>

                    <div>
                        <p>Phone number</p>
                        <input type="tel" placeholder="+101118097" required />
                    </div>

                    <div className="password">
                        <p>Password</p>
                        <input type="password" onInput={handleInput} className="pass" ref={passwordInput} />
                        <i>
                            { seePass ? <FiEyeOff className='see-pass' onClick={hidePassword} />
                             : <IoEyeOutline className='see-pass' onClick={seePassword} />
                            }
                        </i>
                    </div>

                    <section className="strength">
                        <p>Password Strength: </p>
                        <p ref={strength}></p>
                    </section>

                    <section className="lines">
                        <div ref={div1}></div>
                        <div ref={div2}></div>
                        <div ref={div3}></div>
                    </section>

                    <button>Create account</button>
                </form>
            </main>
        </div>
    );
}

export default Signup;