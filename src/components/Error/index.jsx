import React from "react"
import {Link} from "react-router-dom";
import "./error.scss"

const Error = () => {
    return <section className="not-found">
        <p className="error-code">404</p>
        <p className="error-description">Oups! La page que vous demandez n'existe pas.</p>
        <Link  to="/" className="nav-link">Retourner sur la page d'accueil</Link>
    </section>
}

export default Error