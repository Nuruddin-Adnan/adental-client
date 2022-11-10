import React, { useContext, useEffect, useState } from 'react';
import { isEmpty } from '@firebase/util';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import useRating from '../../../hooks/useRating';
import useTitle from '../../../hooks/useTitle';
import TitleBanner from '../../Shared/TitleBanner/TitleBanner';
import Review from '../Review/Review';
import { PreloaderContext } from '../../../contexts/PreloaderProvider/PreloaderProvider';

const ServiceDetails = () => {
    useTitle('Service Details')
    const { user, notify } = useContext(AuthContext);
    const { setPreloader } = useContext(PreloaderContext);
    const [services, setServices] = useState([]);
    const [reviews, setReviews] = useState([]);
    const [error, setError] = useState('');
    const service = useLoaderData();
    const { _id, title, img, description, price, ratings } = service;

    // preloader false
    useEffect(() => setPreloader(false));

    const handleSubmit = (event) => {
        setError('');

        event.preventDefault();
        const form = event.target;
        const reviewMessage = form.review.value;

        if (isEmpty(reviewMessage.trim())) {
            setError('Please write a review');
            return;
        }

        const data = {
            review: reviewMessage,
            email: user.email,
            name: user.displayName,
            userImg: user.photoURL,
            serviceId: service._id,
            createdAt: new Date()
        }

        // Post a review
        fetch(`http://localhost:5000/reviews`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                form.reset();
                notify('Review post successfully');
                setError('');
                const newReview = [data, ...reviews]
                setReviews(newReview);
            })
            .catch(error => setError(error.message));
    }


    useEffect(() => {
        fetch(`http://localhost:5000/services`)
            .then(res => res.json())
            .then(data => {
                const services = data.filter(srv => srv._id !== _id);
                setServices(services);
            })
    }, [_id])

    // show the review agianst a service
    useEffect(() => {
        fetch(`http://localhost:5000/serviceReview/${service._id}`)
            .then(res => res.json())
            .then(reviews => {
                setReviews(reviews);
            })
    }, [service._id])

    return (
        <>
            <TitleBanner title={title}></TitleBanner>
            <section className='py-5'>
                <div className="container py-md-5">
                    <div className="row gy-4">
                        <div className="col-lg-8">
                            <div className="card">
                                <div className="card-header py-3">
                                    <h3><strong className='text-info'>{title}</strong></h3>
                                    <div className="d-flex justify-content-between">
                                        <h3>Price: <span className='text-success'>${price}</span></h3>
                                        <p>{useRating(ratings)}</p>
                                    </div>
                                </div>
                                <div className="card-body">

                                    <img src={img} alt="service img" className='w-100 rounded border' />

                                    <p className='lead mt-4'>{description.text}</p>

                                    <ul>
                                        {
                                            description?.list &&
                                            description?.list.map((listItem, index) => <li className='fs-5' key={index}>{listItem}</li>)
                                        }
                                    </ul>
                                    <hr />
                                    {
                                        reviews.length === 0 ? <h3 className='text-center text-danger py-4'>No Review Yet</h3>
                                            :
                                            reviews.map(review => <Review key={review._id} reviewData={review}></Review>)
                                    }
                                </div>
                            </div>
                            <div className="card mt-4">
                                <div className="card-body">
                                    {
                                        error &&
                                        <div className="alert alert-danger">
                                            {error}
                                        </div>
                                    }
                                    {
                                        user?.uid ?
                                            <form onSubmit={handleSubmit}>
                                                <textarea name="review" rows="5" className='form-control'></textarea>
                                                <div className='mt-3'>
                                                    <button type='submit' className='w-100 btn btn-info py-3 text-white fs-5'>Post your Review</button>
                                                </div>
                                            </form>
                                            :
                                            <Link to={`/review/service/${_id}`} className='w-100 btn btn-info py-3 text-white fs-5'>Please Login to Review</Link>
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card sticky-top">
                                <div className="card-body">
                                    <h3>Others services</h3>
                                    <hr />
                                    <ul className='list-group'>
                                        {
                                            services.map(service => <li className='list-group-item' key={service._id}><Link className='btn btn-link' to={`/services/${service._id}`}>{service.title}</Link></li>)
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ServiceDetails;