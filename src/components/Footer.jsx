import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';

import './Footer.css';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <p className="footer-name">RIO International</p>
          <p className="footer-email"></p>
        </div>
        <div className="footer-social">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaFacebook />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaTwitter />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/in/deepali-kasaudhan-86786327a/" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaLinkedin />
          </a>
          <a href="https://wa.me/91746087988"  className="social-icon">
            <FaWhatsapp />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 RIO International. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
