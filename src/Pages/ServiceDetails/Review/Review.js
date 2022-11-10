import React from 'react';
import moment from 'moment';

const Review = ({ reviewData }) => {
    const { name, createdAt, review, userImg } = reviewData;

    return (
        <div className='d-flex mb-2'>
            <div className="flex-shrink-0 me-2">
                <img src={userImg} alt="avatar" className="rounded-circle border d-block" style={{ width: '48px', height: '48px', objectFit: 'cover' }} />
            </div>
            <div className='flex-grow-0'>
                <h6 className='mb-0'>{name}</h6>
                <small className='text-muted mb-0'>{moment(createdAt).format('LLL')}</small>
                <p>{review}</p>
                <hr />
            </div>
        </div>
    );
};

export default Review;