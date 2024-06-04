import React from 'react'
import { Link } from 'react-router-dom';
import footerLogo from '../../assets/img/footer-logo.png';

const FooterCta = () => {
  return (
    <div className="footer-cta-wrapper">
        <div className="container">
            <div className="footer-cta-bg-wrapper">
                <div className="row justify-content-around align-items-center">
                    <div className="col-lg-3 col-md-3 col-12">
                        <div className="footer-logo">
                            <Link to="/">
                                <img src={footerLogo} alt="logo"/>
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-5 ps-lg-0 offset-lg-1 col-12">
                        <div className="footer-middle-text mt-4 mb-4 mt-md-0 mb-md-0 text-white">
                            <p>Looking to take your hackathon game to the next level? Look no further than Cryptosi - the premier esports team specializing in hackathons. Our team of expert coders, designers, and strategists are dedicated to building great things, whether that's developing cutting-edge projects or competing at the highest level of hackathons. Contact us today to learn more about you can join us and build together.</p>
                        </div>
                    </div>
                    <div className="col-md-4 col-lg-4 col-12">
                        <div className="footer-social-icon ms-md-5 text-lg-md-end">
                            <a className="rounded-circle" href="https://medium.com/@cryptosixxx" rel="noreferrer" target="_blank"><i className="fab fa-medium"></i></a>
                            <a className="rounded-circle" href="https://twitter.com/Crypto_SI" rel="noreferrer" target="_blank"><i className="fab fa-twitter"></i></a>
                            <a className="rounded-circle" href="https://www.instagram.com/cryptosi.eth/" rel="noreferrer" target="_blank"><i className="fab fa-instagram"></i></a>
                            <a className="rounded-circle" href="https://www.linkedin.com/in/carl-anthony-bsc-a8535167" rel="noreferrer" target="_blank"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

  )
}

export default FooterCta