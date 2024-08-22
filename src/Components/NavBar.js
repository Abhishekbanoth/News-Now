import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Link } from "react-router-dom";
const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">
                NavBar
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link to="/" className="nav-link" aria-current="page">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/bussiness" className="nav-link">Bussiness</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/Entertainment" className="nav-link" aria-current="page">Entertainment</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/General" className="nav-link">General</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/Health" className="nav-link" aria-current="page">Health</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/science" className="nav-link">Science</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/sports" className="nav-link" aria-current="page">Sports</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/technology" className="nav-link">Technology</Link>
                    </li>
                </ul>

            </div>
        </div>
    </nav>
    );
};

export default NavBar;
