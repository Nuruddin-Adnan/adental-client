import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const MyReviewRow = ({ reviewData }) => {
    const [service, setService] = useState({});
    const { email, name, createdAt, review, userImg, serviceId } = reviewData;

    useEffect(() => {
        fetch(`http://localhost:5000/services/${serviceId}`)
            .then(res => res.json())
            .then(service => {
                setService(service);
            })
    }, [serviceId])

    return (
        <tr>
            <td>
                <div className='d-flex'>
                    <div className="flex-shrink-0 me-2">
                        <img src={userImg} alt="avatar" className="rounded-circle border d-block" style={{ width: '48px', height: '48px', objectFit: 'cover' }} />
                    </div>
                    <div className='flex-grow-0'>
                        <h6 className='mb-0'>{name}</h6>
                        <small className='text-muted mb-0'>{email}</small>
                    </div>
                </div>
            </td>
            <td> <Link className='btn btn-link' to={`/services/${serviceId}`}>{service.title}</Link> </td>
            <td> {review} </td>
            <td> {createdAt} </td>
            <td>
                <div className="btn-group">
                    <button className='btn btn-sm btn-info'>Edit</button>
                    <button className='btn btn-sm btn-danger'>Delete</button>
                </div>
            </td>
        </tr>
    );
};

export default MyReviewRow;