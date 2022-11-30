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
                for( let i = 0; i < index + 1; i++ ) {
                    i < 5 ?  OTPinput[i + 1].focus() : ""

                    if( (i != 0) && (OTPinput[i].value === "") ) {
                        OTPinput[i - 1].focus();
                    } else if( i === 0 && (OTPinput[i].value === "") ) {
                        OTPinput[0].focus();
                    }
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
                        <p>Input the OTP sent to samuelomorayewa17@gmail.com</p>
                    </div>

                    <form action="" onSubmit={(e) => {
                        e.preventDefault();
                        navigate("/signup")
                    }}>
                        <div className="otp">
                            <Input />
                            <Input />
                            <Input />
                            <Input />
                            <Input />
                            <Input />
                        </div>
                        <button>Verify</button>
                    </form>
                </div>
            </main>
        </div>
    );
}

export default Verify;