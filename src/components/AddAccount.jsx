import React, { useContext, useRef, useState } from 'react';
import "../styles/add-account.scss";
import { IoEyeOutline } from "react-icons/io5";
import { FiEyeOff } from "react-icons/fi";
import warn from "../assets/warning.png";
import cancel from "../assets/Cancel.png";
import NavContext from '../context/NavContext';

function AddAccount() {

    const [seePass, setSeePass] = useState(false);
    const passwordInput = useRef("");

    const { div } = useContext(NavContext);

    const seePassword = () => {
        setSeePass(true);
        passwordInput.current.type = "text";
    }

    const hidePassword = () => {
        setSeePass(false);
        passwordInput.current.type = "password";
    }

    const hideParent = () => {
        div.current.style.display = "none";
    }

    return (
        <div className='add-parent' ref={div}>

            <div>
                <h2>Add account</h2>
                <img onClick={hideParent} src={cancel} alt="cancel" />
            </div>

            <form action="">
                <div>
                    <p>Account Name</p>
                    <input type="text" placeholder="jeff brown" required />
                </div>

                <div>
                    <p>Account ID</p>
                    <input type="number" placeholder="35485" required />
                </div>

                <div>
                    <img src={warn} alt="image" />
                    This value should be valid
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

                <div>
                    <p>Select Broker/Technology</p>
                    <input type="text" placeholder="Select" required />
                </div>

                <div>
                    <p>Broker Server</p>
                    <input type="text" placeholder="Input your broker server" required />
                </div>
                
                <button>Connect to AI</button>

            </form>
        </div>
    );
}

export default AddAccount;