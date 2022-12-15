import { createContext, useRef, useState } from "react";
import AccountContent from "../components/AccountContent";
import ProfileContent from "../components/ProfileContent";

const NavContext = createContext();

export const NavContextProvider = ({children}) => {

    const navRef = useRef("");
    const div = useRef("");
    const menu = useRef("");
    const disable = useRef("");
    const checkInput = useRef("");
    const del = useRef("");
    const delConfirm = useRef("");
    const withdrawal = useRef("");
    const profileCon = useRef("");
    const prof = useRef("");
    const account = useRef("");
    const profileParent = useRef("");

    const navRefAnimation = [
        {left: "-100%", opacity: 0},
        {left: "0", opacity: 1},
    ]

    const NavHideAnimation = [
        {left: "0", opacity: 1},
        {left: "-100%", opacity: 0},
    ]

    const navRefTiming = {
        duration: 500,
        iterations: 1
    }

    const showNav = () => {
        if(navRef.current.classList.contains("toggle")) {
            navRef.current.animate(navRefAnimation, navRefTiming);
            navRef.current.classList.remove("toggle");
        }
    }

    const hideNav = () => {
        navRef.current.animate(NavHideAnimation, navRefTiming);
        navRef.current.classList.add("toggle");
    }

    const showDetails = () => {
        div.current.style.display = "flex";
    }

    const showDisable = () => {
        disable.current.style.display = "flex";
    }

    const showDel = () => {
        del.current.style.display = "flex";
    }

    const showDelConfirm = () => {
        delConfirm.current.style.display = "flex";
    }

    const showWithdrawal = () => {
        withdrawal.current.style.display = "flex";
    }

    const [render, setRender] = useState(<ProfileContent />);

    return (
        <NavContext.Provider value={{navRef, 
        showNav, 
        hideNav, 
        div, 
        showDetails, 
        showDisable, 
        disable, 
        checkInput,
        del,
        showDel,
        delConfirm,
        showDelConfirm,
        withdrawal,
        showWithdrawal,
        profileCon,
        prof,
        account,
        profileParent,
        render,
        setRender,
        menu
        }}  >
            {children}
        </NavContext.Provider>
    )
}

export default NavContext;