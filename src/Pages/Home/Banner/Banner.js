import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css';

const Banner = () => {
    return (
        <section id="banner-carousel" class="carousel slide banner" data-bs-ride="true">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#banner-carousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#banner-carousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#banner-carousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <div class="banner-item banner-item-1">
                        <div class="banner-content">
                            <h2>A PERFECT SMILE <br />
                                GUARANTEED.</h2>
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="banner-item banner-item-2">
                        <div class="banner-content">
                            <h2>BE PROUD OF YOUR <br /> SMILE.</h2>
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="banner-item banner-item-3">
                        <div class="banner-content">
                            <h2>BEAUTIFUL NATURAL <br /> SMILES.</h2>
                        </div>
                    </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#banner-carousel" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#banner-carousel" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </section>
    );
};

export default Banner;