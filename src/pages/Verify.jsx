import React, { useEffect, useRef } from 'react';
import Side from '../components/Side';
import "../styles/verify.scss";
import Logo from "../components/Logo";
import { useNavigate } from 'react-router-dom';

const Input = ({index}) => {

    const handleInput= () => {
        
       
    }

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
            })
        })

    }, [])


    return <input onInput={handleInput} />
}

function Verify() {

    const navigate = useNavigate();

    const input1 = useRef("");
    const input2 = useRef("");
    const input3 = useRef("");
    const input4 = useRef("");
    const input5 = useRef("");
    const input6 = useRef("");

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
                            {/* <input ref={input1} type="text" required />
                            <input ref={input2} type="text" required />
                            <input ref={input3} type="text" required />
                            <input ref={input4} type="text" required />
                            <input ref={input5} type="text" required />
                            <input ref={input6} type="text" required /> */}
                            <Input index={0} />
                            <Input index={1} />
                            <Input index={2} />
                            <Input index={3} />
                            <Input index={4} />
                            <Input index={5} />
                        </div>
                        <button>Verify</button>
                    </form>
                </div>
            </main>
        </div>
    );
}

export default Verify;