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
                    <div className="banner-item banner-item-1" style={{ backgroundImage: "url('https://i.ibb.co/0DYn1c4/image1.jpg')" }}>
                        <div className="banner-content">
                            <h2>A PERFECT SMILE <br />
                                GUARANTEED.</h2>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="banner-item banner-item-2" style={{ backgroundImage: "url('https://i.ibb.co/bJ0V4s2/image3.jpg')" }}>
                        <div className="banner-content">
                            <h2>BE PROUD OF YOUR <br /> SMILE.</h2>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="banner-item banner-item-3" style={{ backgroundImage: "url('https://i.ibb.co/0DYn1c4/image3.jpg')" }}>
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