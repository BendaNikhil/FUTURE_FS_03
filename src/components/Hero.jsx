import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section id="home" className="hero">
            <div className="container hero-container">
                <div className="hero-content">
                    <h4 className="hero-subtitle">Welcome to Brew Haven</h4>
                    <h1 className="hero-title">Your Daily Escape, <span>One Cup</span> at a Time.</h1>
                    <p className="hero-description">
                        Experience the finest artisanal coffee in a space designed for focus,
                        creativity, and connection. Located in the heart of the city.
                    </p>
                    <div className="hero-actions">
                        <a href="#menu" className="btn btn-primary">Explorer Menu</a>
                        <a href="#contact" className="btn btn-outline">Find Us</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
