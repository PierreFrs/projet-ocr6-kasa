import React from "react";
import { Link, useLocation } from "react-router-dom";
import logoRed from "../../assets/logo-red.png";
import "./header.scss"

const Header = () => {

    // Handle the nav links active state
    const location = useLocation();
    const isHomePage = location.pathname === "/";
    const isAProposPage = location.pathname === "/a-propos";
    
    return <header>
        <Link  to="/">
            <div className="logo-container">
                <img className="logo-red" src={logoRed} alt="Logo de Kasa" />
            </div>
        </Link>
        <nav><Link to="/" className={`nav-link ${isHomePage ? "" : "unactive-nav-link"}`}>Accueil</Link>
            <Link to="/a-propos" className={`nav-link ${isAProposPage ? "" : "unactive-nav-link"}`}>A Propos</Link>
        </nav>
    </header>
}

export default Header