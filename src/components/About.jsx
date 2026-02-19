import React from 'react';
import './About.css';

const About = () => {
    return (
        <section id="about" className="section-padding about">
            <div className="container about-container">
                <div className="about-image-wrapper">
                    <img
                        src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2047&auto=format&fit=crop"
                        alt="Brew Haven Interior"
                        className="about-image"
                    />
                    <div className="about-experience">
                        <h3>5+</h3>
                        <p>Years of Crafting</p>
                    </div>
                </div>

                <div className="about-content">
                    <h4 className="subtitle">Our Story</h4>
                    <h2 className="mb-4">Where Passion Meets the <span>Perfect Roast</span></h2>
                    <p className="mb-4">
                        Founded in 2019, Brew Haven was born out of a simple desire: to create a sanctuary
                        for those who appreciate the slower side of life. We believe that coffee is more
                        than just a caffeine kick—it's a ritual, a conversation starter, and a moment of
                        peace in a busy world.
                    </p>
                    <p className="mb-4">
                        Our beans are ethically sourced from small-batch farmers and roasted to
                        perfection by our master roasters. Whether you're a student looking for a
                        quiet corner to study or a professional needing a creative spark, you'll
                        find your "haven" here.
                    </p>
                    <div className="about-features">
                        <div className="feature">
                            <h5>Artisanal Roasts</h5>
                            <p>Sourced from the finest highland estates.</p>
                        </div>
                        <div className="feature">
                            <h5>Cozy Ambiance</h5>
                            <p>Designed for comfort and productivity.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container testimonials">
                <div className="text-center mb-8">
                    <h4 className="subtitle">Kind Words</h4>
                    <h2>What Our <span>Regulars</span> Say</h2>
                </div>
                <div className="testimonials-grid">
                    <div className="testimonial-card">
                        <p className="testimonial-text">
                            "The best quiet spot in the city for freelancers. The Nitro Cold Brew is
                            life-changing, and the atmosphere is pure focus."
                        </p>
                        <div className="testimonial-author">
                            <div className="author-info">
                                <h6>Sarah Jenkins</h6>
                                <span>Freelance Designer</span>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial-card">
                        <p className="testimonial-text">
                            "Brew Haven is my go-to for morning study sessions. The staff knows
                            my name and my order—it truly feels like a second home."
                        </p>
                        <div className="testimonial-author">
                            <div className="author-info">
                                <h6>Mark Thompson</h6>
                                <span>PhD Candidate</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
