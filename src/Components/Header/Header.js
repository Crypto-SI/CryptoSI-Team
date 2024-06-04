import { useState } from "react";
import { Link } from "react-router-dom";
import mainLogo from '../../assets/img/logo.png';
import MobileMenu from "./MobileMenu";
import OffsetMenu from "./OffsetMenu";

const Header = () => {
  const [offset, setOffset] = useState(true)
  const [mobileMenu, setMobileMenu] = useState(true);

  const handleOffset = (e) => {
    e.preventDefault();
    setOffset(!offset);
  }

  const handleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  }
  return (
    <>
    <OffsetMenu offset={offset} handleOffset={handleOffset}  />
    <header className="header-wrap header-1">
        <div className="container-fluid d-flex justify-content-between align-items-center">
            <div className="logo">
                <Link to='/'>
                    <img src={mainLogo} alt="logo"/>
                </Link>
            </div>
            <div className="header-right-area d-flex">
                <div className="main-menu d-none d-xl-block">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/team">Teams</Link></li>
                        <li><Link to="/project">Projects</Link></li>
                        <li><Link to="/scrum">Scrums</Link></li>
                        <li><Link to="/interview">Interviews</Link></li>
                        <li><Link to="/community">Community</Link></li>
                        <li><Link to="/join-us">Join us</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>
                <div className="header-right-elements d-flex align-items-center justify-content-between">
                    <span onClick={handleOffset} className="side-menu-toggle d-none d-xl-block"><i className="fal fa-bars"></i></span>
                    <div className="d-inline-block ms-4 d-xl-none">
                        <div className="mobile-nav-wrap">                    
                            <div id="hamburger" onClick={handleMobileMenu}>
                                <i className="fal fa-bars"></i>
                            </div>
                            <MobileMenu mobileMenu={mobileMenu} handleMobileMenu={handleMobileMenu} />
                        </div>
                        <div className="overlay"></div>
                    </div>
                </div>
            </div>
        </div>
    </header>

    </>
  )
}

export default Header;