import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-brand">
                        <a href="#" className="logo">
                            Brew<span>Haven</span>
                        </a>
                        <p>
                            Your local sanctuary for exceptional coffee and creative community.
                            Making every cup count since 2019.
                        </p>
                    </div>

                    <div className="footer-links">
                        <h5>Quick Links</h5>
                        <ul>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#about">About Us</a></li>
                            <li><a href="#menu">Menu</a></li>
                            <li><a href="#gallery">Gallery</a></li>
                        </ul>
                    </div>

                    <div className="footer-social">
                        <h5>Follow Us</h5>
                        <div className="social-icons">
                            <a href="https://instagram.com/benda_nikhil" target="_blank" rel="noreferrer">Instagram</a>
                            <a href="#">Facebook</a>
                            <a href="#">Twitter</a>
                        </div>
                    </div>

                    <div className="footer-newsletter">
                        <h5>Stay Updated</h5>
                        <p>Get the latest news on special roasts and events.</p>
                        <div className="newsletter-form">
                            <input type="email" placeholder="Email Address" />
                            <button className="btn btn-primary">Join</button>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; 2026 Brew Haven Café. All rights reserved.</p>
                    <div className="footer-legal">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
