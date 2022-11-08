import React from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from '../../Shared/ServiceCard/ServiceCard';

const Services = () => {
    return (
        <section className='services py-5' style={{ backgroundColor: '#F2F2F2' }}>
            <div className="container py-lg-5">
                <h2 className='text-center fw-bold mb-5'>Our Services</h2>
                <div className="row gy-4">
                    <ServiceCard></ServiceCard>
                </div>
                <div className="text-center mt-5">
                    <Link to='/services' class="btn btn-info text-white fs-5 py-3 px-md-5 px-4" href="/">ALL SERVICES</Link>
                </div>
            </div>
        </section>
    );
};

export default Services;