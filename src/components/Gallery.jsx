import React from 'react';
import './Gallery.css';

import gallery0 from '../assets/images/gallery_0.jpg';
import gallery3 from '../assets/images/gallery_3.jpg';

const Gallery = () => {
    const images = [
        gallery0,
        'https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=1974&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070&auto=format&fit=crop',
        gallery3,
        'https://images.unsplash.com/photo-1525648199074-cee30ba79a4a?q=80&w=2070&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=2069&auto=format&fit=crop',
    ];

    return (
        <section id="gallery" className="section-padding gallery">
            <div className="container">
                <div className="text-center mb-8">
                    <h4 className="subtitle">Visual Feast</h4>
                    <h2>Sights of <span>Brew Haven</span></h2>
                </div>

                <div className="gallery-grid">
                    {images.map((img, idx) => (
                        <div key={idx} className="gallery-item">
                            <img src={img} alt={`Gallery ${idx}`} />
                            <div className="gallery-overlay">
                                <span className="overlay-icon">+</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
