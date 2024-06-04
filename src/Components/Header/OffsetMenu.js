import { Link } from 'react-router-dom';
import mainLogo from '../../assets/img/footer-logo.png';

const OffsetMenu = ({offset, handleOffset}) => {
    return (
        <>
        <div className={offset? 'offset-menu': 'offset-menu show'}>
            <span onClick={handleOffset} id="offset-menu-close-btn"><i className="fal fa-plus"></i></span>
            <div className="offset-menu-wrapper text-white">
                <div className="offset-menu-header">
                    <div className="offset-menu-logo">
                        <Link to="/homeOne"><img src={mainLogo} className="bg-transparent" alt="logo"/></Link>
                    </div>
                </div> 
                <div className="offset-menu-section">
                    <h3>About Us</h3>
                    <p>Looking to take your hackathon game to the next level? Look no further than Cryptosi - the premier esports team specializing in hackathons. Our team of expert coders, designers, and strategists are dedicated to building great things, whether that's developing cutting-edge projects or competing at the highest level of hackathons. Contact us today to learn more about you can join us and build together.</p>
                    <Link to="/contact" className="theme-btn mt-30">Consultation</Link>
                </div>
                <div className="offset-menu-footer">
                    <div className="offset-menu-social-icon">
                        <a href="https://twitter.com/Crypto_SI" rel="noreferrer" target="_blank"><i className="fab fa-twitter"></i></a>
                        <a href="https://www.instagram.com/cryptosi.eth/" rel="noreferrer" target="_blank"><i className="fab fa-instagram"></i></a>
                        <a href="https://github.com/Crypto-SI" rel="noreferrer" target="_blank"><i className="fab fa-github"></i></a>
                        <a href="https://www.youtube.com/channel/UCcOzf3f6ZWVlIu-6qQpjudA" rel="noreferrer" target="_blank"><i className="fab fa-youtube"></i></a>
                        <a href="https://medium.com/@cryptosixxx" rel="noreferrer" target="_blank"><i className="fab fa-medium"></i></a>
                    </div>
                </div>    
            </div>               
        </div>
        </>
    )
}

export default OffsetMenu;