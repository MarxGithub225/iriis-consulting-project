import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../Assets/logo/logo_iriss.png'
export default function Header() {
    return (
        <div className="navbar-area fixed-top" >
            <div className="mobile-nav">
                <Link to="/" className="logo">
                <img src={logo} alt="Logo" />
                </Link>
            </div>
            <div className="main-nav" id = "main-nav">
                <div className="container-fluid">
                <nav className="navbar navbar-expand-md navbar-light">
                    <Link className="navbar-brand" to="/">
                    <img src={logo} alt="Logo" />
                    </Link>
                    <div className="collapse navbar-collapse mean-menu" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <Link to="/" className="nav-link">Accueil</Link>
                        </li>

                        <li className="nav-item">
                        <Link to="/consultants" className="nav-link">Nos consultants</Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/contacts" className="nav-link">Contact</Link>
                        </li>
                    </ul>
                    {/* <div className="side-nav">
                        <a className="login-left" href="register.html">
                        <i className="flaticon-enter" />
                        Login/Register
                        </a>
                        <a className="job-right" href="post-a-job.html">
                        Post A Job
                        <i className="bx bx-plus" />
                        </a>
                    </div> */}
                    </div>
                </nav>
                </div>
            </div>
        </div>

    )
}
