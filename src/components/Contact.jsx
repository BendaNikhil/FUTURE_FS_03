import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="section-padding contact">
            <div className="container">
                <div className="contact-grid">
                    <div className="contact-info">
                        <h4 className="subtitle">Visit Us</h4>
                        <h2 className="mb-4">Let's <span>Connect</span></h2>
                        <p className="mb-8">
                            Whether you're looking for a quick caffeine fix or a place to settle
                            in for the afternoon, our doors are always open.
                        </p>

                        <div className="info-item mb-4">
                            <h5>Location</h5>
                            <p>Siddipet, Telangana, India</p>
                        </div>

                        <div className="info-item mb-4">
                            <h5>Opening Hours</h5>
                            <p>Mon - Fri: 7:00 AM - 8:00 PM</p>
                            <p>Sat - Sun: 8:00 AM - 9:00 PM</p>
                        </div>

                        <div className="info-item mb-8">
                            <h5>Contact</h5>
                            <p>+91 8143580474</p>
                            <p>bendanikhil2006@gmail.com</p>
                        </div>

                        <div className="contact-actions">
                            <a href="https://wa.me/918143580474" target="_blank" rel="noreferrer" className="btn btn-primary">
                                Chat via WhatsApp
                            </a>
                        </div>
                    </div>

                    <div className="contact-map">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15166.526221434382!2d78.8415254!3d18.1022216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcc92f8a8b13939%3A0xc3f923b37a50682!2sSiddipet%2C%20Telangana%2C%20India!5e0!3m2!1sen!2sin!4v1708365600000!5m2!1sen!2sin"
                            width="100%"
                            height="450"
                            style={{ border: 0, borderRadius: 'var(--radius)' }}
                            allowFullScreen=""
                            loading="lazy"
                            title="Brew Haven Siddipet Location"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
