import React from 'react'
import './Header.css'

function Header() {
    return (
        <div className="header">
            <img className="header__logo" src="https://cdn.freebiesupply.com/logos/large/2x/amazon-dark-logo-png-transparent.png" />
            <div className="header__search">
                <input className="header__searchInput" type="text" />
                {/* Logo */}
            </div>
            <div className="header__nav">
                <div className="header__option">
                    <span className="header__optionLineOne">
                        Hello Customer
                    </span>
                    <span className="header__optionLineTwo">
                        Sign In
                    </span>
                </div>

                <div className="header__option">
                    
                </div>

                <div className="header__option">
                    
                </div>
            </div>
        </div>
    )
}

export default Header
