import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../../hooks/useTitle';
import TitleBanner from '../../Shared/TitleBanner/TitleBanner';
import MyReviewRow from '../MyReviewRow/MyReviewRow';

const MyReview = () => {
    useTitle('My Review');
    const reviews = useLoaderData();
    return (
        <>
            <TitleBanner title='My Review'></TitleBanner>
            <div className="container my-5">
                <div className="card">
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table table-border table-striped">
                                <thead className='bg-dark text-white'>
                                    <tr>
                                        <th className='py-3 px-3'>Created By</th>
                                        <th className='py-3 px-3'>Service Title</th>
                                        <th className='py-3 px-3'>Review</th>
                                        <th className='py-3 px-3'>Created At</th>
                                        <th className='py-3 px-3'>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        reviews.length === 0 && <tr><td colSpan="50" className="text-danger text-center fs-3">No Review Yet</td></tr>
                                    }
                                    {
                                        reviews.map(review => <MyReviewRow key={review._id} reviewData={review}></MyReviewRow>)
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MyReview;