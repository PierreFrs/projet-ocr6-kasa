import React from "react";
import "./footer.scss"
import logoWhite from "../../assets/logo-white.png"

const Footer = () => {
  return (
    <footer>
      <div className="logo-container">
        <img src={logoWhite} alt="Logo de Kasa" />
      </div>
      <p className="legals">&copy;2020 Kasa. All right reserved</p>
    </footer>
  )
}

export default Footer