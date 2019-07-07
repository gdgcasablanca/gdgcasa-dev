import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import GDGCasaLogo from '../../images/logo-gdg.svg'
import WTMCasaLogo from '../../images/logo-wtm.svg'
import './header.css'

export const Header = ({ siteTitle }) => (
  <header className="header">
    <nav className="nav">
      <div className="container">
        <a href="/" className="logo logo-gdg">
          <img src={GDGCasaLogo} alt={siteTitle} />
        </a>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/#Events">Events</Link>
          <Link to="/#Contact">Contact</Link>
          <Link to="/team">Team</Link>
          {/* <a href="#!">About</a>  */}
        </div>

        <a
          href="https://wtm.gdgcasablanca.com"
          className="logo logo-wtm"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={WTMCasaLogo}
            alt="WTM Casablanca. Connect. Create. Celebrate."
          />
        </a>
      </div>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `GDG & WTM Casablanca`,
}
