import React, { useEffect } from 'react';
import Side from '../components/Side';
import "../styles/verify.scss";
import Logo from "../components/Logo";
import { useNavigate } from 'react-router-dom';

const Input = () => {

    useEffect(() => {

        const OTPinput = document.querySelectorAll("input");

        OTPinput[0].focus();
        
        OTPinput.forEach( (input, index) => {
            input.addEventListener("input", () => {
                // Variable that stores all input values.
                let allInputValues = "";

                if (input.value.length > 1) {
                    input.value = input.value.slice(0, 1);
                }

                for( let i = 0; i < index + 1; i++ ) {

                    allInputValues += OTPinput[i].value;

                    i < 5 ?  OTPinput[i + 1].focus() : ""

                    if( (i != 0) && (OTPinput[i].value === "") ) {
                        OTPinput[i - 1].focus();
                    } else if( i === 0 && (OTPinput[i].value === "") ) {
                        OTPinput[0].focus();
                    }
                }
 
                if (index === 5) {
                    // allInputValues is available for use here.
                }
            });
        });

    }, [])


    return <input />
}

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
                        <p>Verify your email to help us confirm your access to the email provided.</p>
                    </div>

                    <p style={{
                        fontWeight: 700,
                        fontSize: '14px',
                        marginTop: "7px",
                        color: "#696969"
                    }}>Not your email? <span style={{
                        color: "#00C805"
                    }}>Go back</span></p>

                    <form action="" onSubmit={(e) => {
                        e.preventDefault();
                    }}>
                        <div className="otp">
                            <Input />
                            <Input />
                            <Input />
                            <Input />
                            <Input />
                            <Input />
                        </div>
                        <button>Re-enter email</button> <br />
                        <button onClick={() => navigate("/signup")}>Verify</button>
                    </form>
                </div>
            </main>
        </div>
    );
}

export default Verify;