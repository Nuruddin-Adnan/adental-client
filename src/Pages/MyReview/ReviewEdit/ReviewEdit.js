import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { isEmpty } from '@firebase/util';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../../hooks/useTitle';
import TitleBanner from '../../Shared/TitleBanner/TitleBanner';

const ReviewEdit = () => {
    useTitle('Review Edit');
    const { notify } = useContext(AuthContext);
    const navigate = useNavigate();
    const [error, setError] = useState('');
    const [service, setService] = useState({});
    const review = useLoaderData();

    useEffect(() => {
        fetch(`http://localhost:5000/services/${review.serviceId}`)
            .then(res => res.json())
            .then(service => {
                setService(service);
            })
    }, [review])

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
            review: reviewMessage
        }

        // Edit a review by patch method
        fetch(`http://localhost:5000/reviews/${review._id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                notify('Review Edit successfully');
                setError('');
                navigate(`/review`)
            })
            .catch(error => setError(error.message));


    }


    return (
        <>
            <TitleBanner title='Review Edit'></TitleBanner>
            <section className='py-5'>
                <div className="container my-lg-5">
                    <div className="row">
                        <div className="col-lg-8 m-auto">
                            <div className="card mt-4">
                                <div className="card-header">
                                    <h5>Service: {service.title}</h5>
                                </div>
                                <div className="card-body">
                                    {
                                        error &&
                                        <div className="alert alert-danger">
                                            {error}
                                        </div>
                                    }
                                    <form onSubmit={handleSubmit}>
                                        <textarea defaultValue={review.review} name="review" rows="5" className='form-control'></textarea>
                                        <div className='mt-3'>
                                            <button type='submit' className='w-100 btn btn-info py-3 text-white fs-5'>Update your Review</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ReviewEdit;