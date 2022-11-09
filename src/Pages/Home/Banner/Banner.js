import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <section id="banner-carousel" className="carousel slide banner" data-bs-ride="true">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#banner-carousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#banner-carousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#banner-carousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <div className="banner-item banner-item-1">
                        <div className="banner-content">
                            <h2>A PERFECT SMILE <br />
                                GUARANTEED.</h2>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="banner-item banner-item-2">
                        <div className="banner-content">
                            <h2>BE PROUD OF YOUR <br /> SMILE.</h2>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="banner-item banner-item-3">
                        <div className="banner-content">
                            <h2>BEAUTIFUL NATURAL <br /> SMILES.</h2>
                        </div>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#banner-carousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#banner-carousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </section>
    );
};

export default Banner;