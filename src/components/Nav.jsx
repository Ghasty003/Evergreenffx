import React from "react";
import "../styles/nav.scss";
import logo from "../assets/home-logo.png";
import logoM from "../assets/ever2 1.png";
import { Link, useMatch, useNavigate, useResolvedPath } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useRef } from "react";

const CustomLink = ({to, text}) => {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({path: resolvedPath.pathname, end: true})
    return (
        <Link className={`${isActive ? "active" : ""}`} to={to}>{ text }</Link>
    )
}

function Nav() {

    const navigate = useNavigate();
    const ul = useRef();

    const hide = () => {
        if (window.innerWidth <= 980) {
            ul.current.style.top = "-1000px"
        }
    }

    const show = () => {
        ul.current.style.top = 0;
    }

    return (
        <nav>
            <img src={logo} alt="logo" />
            <img src={logoM} alt="logo" />
            <ul ref={ul}>
                <FaTimes onClick={hide} className="times" size={30} />
                <CustomLink to="/" text="Home" />
                <CustomLink to="/about" text="About" />
                <a href="#contact">Contact</a>
                <CustomLink to="/faqs" text="FAQs" />
                <CustomLink to="/terms" text="T&Cs" />
                <CustomLink to="/privacy" text="Privacy" />
            </ul>
            <div onClick={show}>
                <button onClick={() => navigate("/login")}>Login</button>
                <button onClick={() => navigate("/create")}>Get Started</button>
                <FaBars className="bars" size={30} />
            </div>
        </nav>
    );
}

export default Nav;