import React, { useRef, useState } from 'react';
import Side from '../components/Side';
import "../styles/signup.scss";
import { IoEyeOutline } from "react-icons/io5";
import { FiEyeOff } from "react-icons/fi"
import Logo from '../components/Logo';

function Signup() {

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

            <main className='signup-main'>
                
                <Logo />

                <div className="header">
                    <h2>Personal Details</h2>
                    <p>Please fill your personal details below </p>
                </div>

                <form action="">
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
                        <input type="password" className="pass" ref={passwordInput} />
                        <i>
                            { seePass ? <FiEyeOff className='see-pass' onClick={hidePassword} />
                             : <IoEyeOutline className='see-pass' onClick={seePassword} />
                            }
                        </i>
                    </div>

                    <section className="strength">
                        <p>Password Strength: </p>
                        <p></p>
                    </section>

                    <section className="lines">
                        <div></div>
                        <div></div>
                        <div></div>
                    </section>

                    <button>Create account</button>
                </form>
            </main>
        </div>
    );
}

export default Signup;