import React, { useState } from 'react'

export function Nav(props) {
  const [navbarIsOpen, setNavbarIsOpen] = useState(false)
  
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-primary">
        <div className="d-flex flex-grow-1">
            <span className="w-100 d-sm-none d-block text-left"/>
            <a className="navbar-brand d-lg-inline-block text-light" href="/">
                Absolute Kitchen & Flooring
            </a>
            <div className="w-100 text-right">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#myNavbar" onClick={() => setNavbarIsOpen(!navbarIsOpen)}>
                    <span className="navbar-toggler-icon"></span>
                </button>
            </div>
        </div>
        <div className={`collapse navbar-collapse ${
                    navbarIsOpen ? 'show' : ''
                  }`}flex-grow-1 text-right id="myNavbar">
    
    
            <ul className="navbar-nav ml-auto flex-nowrap">
                <li className="nav-item">
                    <a href="/aboutus" className="nav-link m-2 menu-item nav-active text-light">About Us</a>
                </li>
                <li className="nav-item">
                    <a href="/" className="nav-link m-2 menu-item text-light">Projects</a>
                </li>
                <li className="nav-item">
                    <a href="/contact" className="nav-link m-2 menu-item text-light">Contact Us</a>
                </li>
            </ul>
        </div>
    </nav>
      )
    }
