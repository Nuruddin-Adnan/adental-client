import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ServiceCard = () => {
    return (
        <div className="col-lg-4 col-md-6">
            <div className="card border-0 service-card shadow">
                <div className="card-body text-center">
                    <img src="https://www.webfulcreations.com/envato/dental_clinic/assets/images/help/services/service_4.jpg" alt="service" className='w-100' />
                    <h4 className='fw-bold mt-3'>Advanced Technology</h4>
                    <p className='text-muted'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, velit! Quidem enim inventore illo porro eligendi facere at libero fugiat unde rerum, autem, itaque possimus quae omnis pariatur, dicta ipsa?</p>
                    <h5 className='text-info fw-bold'>Price: $60</h5>
                    <div className="ratings text-warning">
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar className='text-muted'></FaStar>
                    </div>
                </div>
                <Link className='btn btn-info text-white w-100 fs-5 py-3 rounded-0'>SERVICE DETAILS</Link>
            </div>
        </div>
    );
};

export default ServiceCard;