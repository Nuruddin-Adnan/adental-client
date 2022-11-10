import React from 'react';
import { Link } from 'react-router-dom';
import useRating from '../../../hooks/useRating';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const ServiceCard = ({ service }) => {
    const { _id, title, img, description, price, ratings } = service;

    return (
        <div className="col-lg-4 col-md-6">
            <div className="card border-0 service-card shadow">
                <div className="card-body text-center">
                    <PhotoProvider>
                        <PhotoView src={img}>
                            <img src={img} alt="service" className='w-100' />
                        </PhotoView>
                    </PhotoProvider>
                    <h4 className='fw-bold mt-3'>{title}</h4>
                    <p className='text-muted lead'>
                        {description.text.substring(0, 100)}
                        {description.text.length > 100 ? '...' : ''}
                    </p>
                    <h5 className='text-info fw-bold'>Price: ${price}</h5>
                    <div className="ratings">
                        {useRating(ratings)}
                    </div>
                </div>
                <Link to={`/services/${_id}`} className='btn btn-info text-white w-100 fs-5 py-3 rounded-0'>VIEW DETAILS</Link>
            </div>
        </div>
    );
};

export default ServiceCard;