import React from "react"
import '../css/nav.css'
import { menuItems } from '../data/menuItems'

export default function Nav(){
    const [hamburgerOpen, setHamburgerOpen] = React.useState(false);

    const menuListItems = menuItems.map((item, index) => {
        return <li key={index}><a href={item.href} onClick={() => setHamburgerOpen(false)}><i className={`fa-solid ${item.icon}`}></i> {item.label}</a></li>
    })

    function toggleHamburger() {
        setHamburgerOpen(prevHamburgerOpen => !prevHamburgerOpen);
    }

    function closeMenu() {
        setHamburgerOpen(false);
    }

    return (
        <>
            {hamburgerOpen && (
                <div className="menu-overlay" onClick={closeMenu}></div>
            )}

            <nav>
                <div className="border-container"><div className="logo-container"><a href="#">&lt;JD&gt;</a></div></div>
                <button className={hamburgerOpen ? "hamburger open" : "hamburger"} onClick={toggleHamburger} aria-label="hamburger menu">
                    {!hamburgerOpen ? 
                    <i className="fa-solid fa-bars"></i> :
                    <i className="fa-solid fa-xmark"></i>
                    }
                </button>
                <ul className={hamburgerOpen ? "nav-links open" : "nav-links"}>
                    {menuListItems}
                </ul>
            </nav>
        </>
    )
}