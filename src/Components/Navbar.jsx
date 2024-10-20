import React from 'react'
import '../index.css';

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-color-black">
                <div className="container">
                    <a className="navbar-brand text-white" href="#"><b>Portfolio</b></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#skills">Skills</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#projects">Projects</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
