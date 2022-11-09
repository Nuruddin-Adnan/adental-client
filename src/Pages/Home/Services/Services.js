import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from '../../Shared/ServiceCard/ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/services/limit/3`)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <section className='services py-5' style={{ backgroundColor: '#F2F2F2' }}>
            <div className="container py-lg-5">
                <h2 className='text-center fw-bold mb-5'>My Services</h2>
                <div className="row gy-4">
                    {
                        services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                    }

                </div>
                <div className="text-center mt-5">
                    <Link to='/services' className="btn btn-info text-white fs-5 py-3 px-md-5 px-4" href="/">SEE ALL</Link>
                </div>
            </div>
        </section>
    );
};

export default Services;