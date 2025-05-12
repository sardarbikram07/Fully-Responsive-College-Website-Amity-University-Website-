import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='site-footer'>
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-main">
            <span className="copyright">© 2025 Amity University. All rights reserved.</span>
            <div className="footer-links">
              <Link to="/terms">Terms of Services</Link>
              <span className="link-separator">•</span>
              <Link to="/privacy">Privacy Policy</Link>
            </div>
          </div>
          <div className="social-login">
            <p>Follow us on</p>
            <div className="social-providers">
              <a href="https://amity.edu/kolkata/" className="social-icon google" aria-label="Sign in with Google" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-google"></i>
              </a>
              <a href="https://www.facebook.com/amitykolkataofficialpage/" className="social-icon facebook" aria-label="Sign in with Facebook" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://x.com/amity_kolkata" className="social-icon twitter" aria-label="Sign in with Twitter" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://www.instagram.com/amity_kolkata/?hl=en" className="social-icon instagram" aria-label="Sign in with Instagram" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;