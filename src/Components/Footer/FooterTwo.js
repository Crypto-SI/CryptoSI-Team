import React from 'react'
import { Link } from 'react-router-dom'
import FooterCta from './FooterCta'
import FooterOneCopyrights from './FooterOneCopyrights'
import footerMap from '../../assets/img/footer-map.png';

const FooterTwo = () => {
  return (
    <footer className="footer-2 footer-wrap">
        <div className="footer-widgets-wrapper text-white">
            <div className="container">
                <div className="row">
                    <div className="col-xl-3 pe-xl-0 col-sm-6 col-12">
                        <div className="single-footer-wid site_info_widget">
                            <div className="wid-title">
                                <h3>Get In Touch</h3>
                            </div>
                            <div className="contact-us">
                                <div className="single-contact-info">
                                    <div className="icon">
                                        <i className="fab fa-discord"></i>
                                    </div>
                                    <div className="contact-info">
                                        <p>Cryptosi.eth#4286</p>
                                    </div>
                                </div>
                                <div className="single-contact-info">
                                    <div className="icon">
                                        <i className="fal fa-envelope"></i>
                                    </div>
                                    <div className="contact-info">
                                        <p>cryptosi@protonmail.com</p>
                                    </div>
                                </div>
                                <div className="single-contact-info">
                                    <div className="icon">
                                        <i className="fab fa-telegram"></i>
                                    </div>
                                    <div className="contact-info">
                                        <p>@Crypto_si</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6 offset-xl-1 col-xl-3 ps-xl-5 col-12">
                        <div className="single-footer-wid">
                            <div className="wid-title">
                                <h3>Quick Links</h3>
                            </div>
                            <ul>
                                <li><Link to="/team">About Teams</Link></li>
                                <li><Link to="/community">Community</Link></li>
                                <li><Link to="/project">Project</Link></li>
                                <li><Link to="/interview">Interviews</Link></li>
                                <li><Link to="/join-us">Join Us</Link></li>
                            </ul>
                        </div>
                    </div> 

                    <div className="col-sm-6 col-xl-4 offset-xl-1 col-12">                        
                        <div className="single-footer-wid newsletter_widget">
                            <div className="wid-title">
                                <h3>Our Footprint</h3>
                            </div>
                            <div className="map-location">
                                <img src={footerMap} alt=""/>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
        </div>

        <FooterCta/>
        <FooterOneCopyrights/>
    </footer> 
  )
}

export default FooterTwo