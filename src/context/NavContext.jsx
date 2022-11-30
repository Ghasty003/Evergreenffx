import { createContext, useRef } from "react";


const NavContext = createContext();

export const NavContextProvider = ({children}) => {

    const navRef = useRef("");
    const div = useRef("");
    const disable = useRef("");
    const checkInput = useRef("");
    const del = useRef("");
    const delConfirm = useRef("");

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
        showDelConfirm
        }}  >
            {children}
        </NavContext.Provider>
    )
}

export default NavContext;