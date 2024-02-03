import React from 'react';
import '../styles/Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="social-links">
          <a href="https://www.linkedin.com/in/d-dhathrichandra" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://github.com/d-dhathrichandra" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
          {/* Add more social links as needed */}
        </div>
        <p>&copy; 2024 Your Name. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
