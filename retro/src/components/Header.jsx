import React from 'react'

import '../static/css/css/header.css'

const Header = () => {
    return (
        <header>
            <nav className="navbar">
                <div className="container">
                    <ul className="navbar-list">
                        <li className="navbar-item">
                            <a className="navbar-link" href="/">main</a>
                        </li>
                        <li className="navbar-item right">
                            <a href="/about" className="navbar-link about" >about</a>
                        </li>
                    </ul>
                    
                </div>
            </nav>
        </header>
    )
}

export default Header