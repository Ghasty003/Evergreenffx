import React from "react";
import "../styles/nav.scss";
import logo from "../assets/home-logo.png";
import { Link, useMatch, useNavigate, useResolvedPath } from "react-router-dom";

const CustomLink = ({to, text}) => {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({path: resolvedPath.pathname, end: true})
    return (
        <Link className={`${isActive ? "active" : ""}`} to={to}>{ text }</Link>
    )
}

function Nav() {

    const navigate = useNavigate();

    return (
        <nav>
            <img src={logo} alt="logo" />
            <ul>
                <CustomLink to="/" text="Home" />
                <CustomLink to="/about" text="About" />
                <CustomLink to="/contact" text="Contact" />
                <CustomLink to="/faqs" text="FAQs" />
                <CustomLink to="t&c" text="T&Cs" />
                <CustomLink to="/privacy" text="Privacy" />
            </ul>
            <div>
                <button onClick={() => navigate("/login")}>Login</button>
                <button onClick={() => navigate("/create")}>Get Started</button>
            </div>
        </nav>
    );
}

export default Nav;