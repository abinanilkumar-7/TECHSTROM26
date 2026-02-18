import { FaInstagram, FaLinkedin, FaGlobe } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h3>TECHSTROM 26</h3>
                    <p>Department of Electronics and Communication Engineering</p>
                    <p>Vel Tech Multi Tech</p>
                </div>
                <div className="footer-section">
                    <h4>Connect With Us</h4>
                    <div className="social-icons">
                        <a href="https://www.instagram.com/abin_46_7" target="_blank" rel="noopener noreferrer" className="social-icon"><FaInstagram /></a>
                        <a href="https://linkedin.com/abin-anilkumar-" target="_blank" rel="noopener noreferrer" className="social-icon"><FaLinkedin /></a>
                        <a href="https://www.veltechmultitech.org/" target="_blank" rel="noopener noreferrer" className="social-icon"><FaGlobe /></a>
                    </div>
                </div>
                <div className="footer-section">
                    <p>&copy; {new Date().getFullYear()} TECHSTROM. All Rights Reserved.</p>
                    <p className="credits">Designed by Aucix Developers</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
