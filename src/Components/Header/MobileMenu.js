import React from 'react'
import { Link } from 'react-router-dom'

const MobileMenu = ({mobileMenu, handleMobileMenu}) => {
  return (
    <div className={mobileMenu ? 'mobile-nav' : 'mobile-nav show'}>
        <button onClick={handleMobileMenu} type="button" className="close-nav">
            <i className="fal fa-times-circle"></i>
        </button>
        <nav className="sidebar-nav">
            <ul className="metismenu" id="mobile-menu">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/team">Teams</Link></li>
                <li><Link to="/project">Projects</Link></li>
                <li><Link to="/scrum">Scrums</Link></li>
                <li><Link to="/interview">Interviews</Link></li>
                <li><Link to="/community">Community</Link></li>
                <li><Link to="/join-us">Join Us</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>

    </div>    
     
  )
}

export default MobileMenu